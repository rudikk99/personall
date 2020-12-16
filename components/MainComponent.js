import React, { Component } from 'react';
//import Home from './HomeComponent';
//import Login from './LoginComponent';
//import Feedback from './FeedbackComponent';

import { ListItem } from 'react-native-elements';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    }, 
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
            title="Thank you for beeing part of the STUDY"
            subtitle='Ones approved, the app will run on the background consuming next to nothing of your battery.'
            //leftAvatar={{ source: require('./images/logo_personall_logo.jpg')}}
            //leftAvatar2={{ source: require('./images/logo_alldience02b_cropped.png')}}
        />
    )}
}

export default Main;