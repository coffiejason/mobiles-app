import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import CustomCarousel from '../components/Carousel'


export default function Dashboard({ navigation }) {


  return (
    <Background>
      <CustomCarousel />
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        }
      >
        Logout
      </Button> */}
    </Background>
  )
}
