import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer, ChannelContainer} from './components';

import './App.css';

const apikey = 'hsdgk8hkntn7';

const client = StreamChat.getInstance(apikey);

const App = () => {
  return (
    <div className="app__wrapper">
        <Chat client={client} theme ="team light">
            <ChannelListContainer 

            />
            <ChannelContainer

            />
        </Chat>
    </div>
  );
}

export default App
