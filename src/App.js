import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './ChatFeed'
import LoginForm from './LoginForm';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm/> //if username in available LC then open login component
  return (
      <ChatEngine
		  height="100vh"
      projectID='46b348e7-6e2f-4e94-af5e-c7c19bca9a00'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}		/>
    );
}

export default App;
