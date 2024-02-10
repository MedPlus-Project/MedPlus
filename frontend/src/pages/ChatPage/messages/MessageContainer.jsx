import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useCoversation from '../../../zustand/useConversation'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useCoversation();
  return (
    
    <div className='border-2 border-gray-300 rounded-[20px] m-5 h-full'>
      {!selectedConversation ?(
        <NoChatSelected/>
      ):(
    
      <div className='   px-4 py-2 mb-2'>
        <span className='label-text'> To:</span>{" "}
        <span className='text-gray-500 font-bold'> {selectedConversation.userName}</span>

        <Messages/>
        <MessageInput/>

      </div>)}

    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () =>{
  return(
    <div className='flex items-center'>
      <p>Welcome</p>
    </div>
  );
}