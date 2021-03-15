import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="78211060-e60f-4c3d-bed0-c7b763fe5bc8"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
    />
  )
}

export default App;