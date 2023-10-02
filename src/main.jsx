import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter'

//extending the theme
const colors = {
  neutralW: '#F9F9F9',
  orange1: '#FFAC31',
  orange2: '#FD9F00',
  background: '#F5F5F5',
  neutralB: '#1C1C1C',
  gray900: '#4A4A4A',
  gray500: '#B8B8B8',
  gray200: '#B8B8B8',
  gray100: '#EBEBEB',
};

const fonts = {
  body: `'Inter', sans-serif`,
};

const theme = extendTheme({ colors, fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
     <App /> 
    </ChakraProvider>
  </React.StrictMode>,
)
