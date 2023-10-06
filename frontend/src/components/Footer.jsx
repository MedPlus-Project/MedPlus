import React from "react";
import socialmediaicon from "../assets/social media.png";

const Footer = ()=>{
    return(
        <div className="bg-teal mt-5 rounded-t-full" >
            <div className="flex flex-row items-center " >
                <div className="flex-1 flex flex-col items-center p-8">
                    <p className="text-xl">LEGAL</p>
                    <p>Privacy policy</p>
                    <p>Terms and conditions</p>
                    <p>Copyright</p>
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <p className="text-xl p-2">Social Media</p>
                    <img src={socialmediaicon} alt="social media icons" />
                </div>
            </div>
                <div className="p-2 border-t-2 border-white ">
                    <p className="text-center">Copyright © 2010-2023 All rights reserved</p>
                </div>
        </div>

    );
};

export default Footer;