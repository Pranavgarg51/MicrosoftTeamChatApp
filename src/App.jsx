import React from "react";
import { ChatEngine } from 'react-chat-engine'
import "./App.css"
 import ChatFeed from "/src/components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App=()=>{

if(! localStorage.getItem('username')) return <LoginForm/>


  return(
    <ChatEngine
    height={'100vh'}
    projectID={'5f8f68ad-f2b9-414a-9a91-a68c6aa79896'}
    // userName={'Pranav Garg'}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}

    />
  )
};
export default App;