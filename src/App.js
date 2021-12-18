import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './ChatFeed'

function App() {
  return (
    <div className="app">
    <ChatEngine
			height='100vh'
			userName='Bella'
			userSecret='1234'
			projectID='46b348e7-6e2f-4e94-af5e-c7c19bca9a00'
      renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
		/>
    </div>
  );
}

export default App;
