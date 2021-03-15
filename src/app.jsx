import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="78211060-e60f-4c3d-bed0-c7b763fe5bc8"
      userName="junkiesan"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
    />
  )
}

export default App;