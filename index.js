import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {StateProvider} from './context.js';

function AppWithProvider() {
    return(
        <StateProvider>
            <App/>
        </StateProvider >
    );    
}

AppRegistry.registerComponent(appName, () => AppWithProvider);