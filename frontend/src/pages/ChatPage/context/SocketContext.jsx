import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const [authUserId, setAuthUserId] = useState(null);

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            setAuthUserId(userId);
        }
    }, [token]);

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        if (authUserId) {
            const socket = io("http://localhost:3000");

            setSocket(socket);

            /*socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });*/

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, []);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
