import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import User from '../components/User'


export default function ProfileScreen({ navigation }) {
  // navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'LoginScreen' }],
  // })

  return (
    <Background>
      <User />
      <Header>John Doe</Header>
      <Paragraph>
        John Doe's Mobile account
      </Paragraph>
      <Button
        mode="outlined"
        //onPress={() => { navigation.navigate('LoginScreen') }}
      >
        Logout
      </Button>
    </Background>
  );
}