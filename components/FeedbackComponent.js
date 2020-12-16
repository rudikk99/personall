import React, { Component } from 'react';
import { ScrollView} from 'react-native-gesture-handler';
import { Text, PanResponder  } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

const recognizeDrag = ({dx}) => (dx < -200) ? true : false;

const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (recognizeDrag(gestureState)) {
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add ' + campsite.name + ' to favorites?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK',
                            onPress: () => props.favorite ?
                                console.log('Already set as a favorite') : props.markFavorite()
                        }
                    ],
                    { cancelable: false }
                );
            }
            return true;
        }
    });

class Feedback extends Component {
    constructor (props) {
        super(props);
    }
    static navigationOptions = {
        title: "Something is wrong? Send us your Feedback"
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['boris@immetrica.com'],
            subject: 'feedback from user',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
                    <Card title="Address information" wrapperStyle={{margin: 20}}>
                        <Text>Email: boris@immetrica.com</Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                    </Animatable.View>
            </ScrollView>
        );
    }
}

export default Feedback;