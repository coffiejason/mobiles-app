import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function SettingsScreen({ navigation }) {
    return (
        <Background>
        <Logo />
        <Header>Settings</Header>
        <Paragraph>
          Settings Page for Mobile app
        </Paragraph>
        <Button
          mode="outlined"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            })
          }
        >
          Logout
        </Button>
      </Background>
    );
}