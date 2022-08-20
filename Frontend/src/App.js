import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import './css files/title.css'

const theme = extendTheme({
  styles:{
    global:{
      body:{
        bg: 'blue.400'
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div id = "cloud1"></div>
      <div id ="cloud2"></div>
      <div id = "cloud3"></div>
      <div id = "cloud4"></div>

      <HStack spacing={10}>
        <button class = "button aboutbutton">about</button>
        <button class = "button contactbutton">contact</button>
      </HStack>


      <p class = "welcome">welcome to</p>
      <p class = "appName">weather app name</p> 

      

    </ChakraProvider>
  );
}

export default App;
