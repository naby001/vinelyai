import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import { createMuiTheme, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import {useSelector} from 'react-redux';

import { useDispatch } from 'react-redux';
import { setLogout } from './state';
import AuthPage from './pages/authPage';
import SearchInterface from './pages/search';
import FriendsInterface from './pages/friends';

const App = () => {
  const theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "5px"
          },
          "*::-webkit-scrollbar-track": {
            background: "#635acc"
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#1D388F61",
            borderRadius: "2px"
          }
        }
      }
    }
  });
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Media query for phones and tablets
 
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
     
     <CssBaseline />

      <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/search" element={<SearchInterface />} />
      <Route path="/friends" element={<FriendsInterface />} />

      </Routes>
      </ThemeProvider>
  </BrowserRouter>
  );
};

export default App;
