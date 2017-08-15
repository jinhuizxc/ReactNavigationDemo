/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";

class RecentChatsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of recent chats</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
                    title="Chat with Lucy!"
                />
            </View>
        );
    }
}

class AllContactsScreen extends React.Component {
    //  可以设置tab标题项
    // static navigationOptions = {
    //     title: 'Chat with jane',
    // };
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('jane', {user: 'jane'})}
                    title="Chat with jane!"
                />
            </View>
        );
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

MainScreenNavigator.navigationOptions = {
    // 设置主标题
    title: 'My Chats',
};

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

class Chat1Screen extends React.Component {
    static navigationOptions = {
        title: 'Chat with jane',
    };

    render() {
        return (
            <View>
                <Text>Chat with jane</Text>
            </View>
        );
    }
}
const SimpleApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat: {screen: ChatScreen},
    jane: {screen: Chat1Screen},
});

AppRegistry.registerComponent('ReactNavigationDemo', () => SimpleApp);
