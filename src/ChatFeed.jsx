import React from 'react'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import ThierMessage from './ThierMessage'

const ChatFeed = (props) => {
   const {chats,activeChat,userName,messages} =props;
   const currentChat = chats && chats[activeChat] 
   
   const renderMessages=()=>{
   const keys=Object.keys(messages);
    
    return keys.map((key,index) =>{
    const message=messages[keys]; //messages with keys
    const lastMessageKey=index ===0? null: keys[index-1];  //last msg
    const isMyMessage=userName===message.sender.username;    //my msg

    
    return (
        <div key={`msg_${index}`} style={{width:'100%'}}>
         <div className="message-block">
        {
            isMyMessage? <MyMessage message={message}/> 
            : <ThierMessage message={message} lastMessage={message[lastMessageKey]}/>
        }
         </div>   
         <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px' , marginLeft: isMyMessage? '0px':'68px'}}>
         receipts
         </div>   
        </div>
    )
})
}

if(!currentChat) return '...loading';

return(
    <div className='chat-feed'>
        <div className="chat-title-container">
            <div className="chat-title">
         {currentChat.title}   
        </div>
        <div className="chat-subtitle">
         {currentChat.people.map((person) =>
             `${person.person.username}`
         )}   
        </div>
        </div>
        {renderMessages()}
        <div style={{height:'100px'}}>
           <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat}/>   
            </div> 
        </div>
    </div>
);
}

export default ChatFeed

/* activeChat: 80644
chats: {80644: {…}}
conn: {height: '100vh', userName: 'Bella', userSecret: '1234', projectID: '46b348e7-6e2f-4e94-af5e-c7c19bca9a00', renderChatFeed: ƒ, …}
connecting: false
creds: {height: '100vh', userName: 'Bella', userSecret: '1234', projectID: '46b348e7-6e2f-4e94-af5e-c7c19bca9a00', renderChatFeed: ƒ, …}
height: "100vh"
isBottomVisible: false
loadMoreMessages: false
messages: {2021-12-17 16:30:34.044374+00:00: {…}}
projectID: "46b348e7-6e2f-4e94-af5e-c7c19bca9a00"
renderChatFeed: chatAppProps => {…}
sessionToken: "st-6dfde457-4baf-4edf-bad7-f1d8fef831c0" */