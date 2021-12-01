import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from 'tw.macro';
import { TopSection } from './containers/TopSection';

const AppContainer = tw.div`
  flex
  w-full
  h-full
`

function App() {
  return (
  <AppContainer>
    <TopSection />
    </AppContainer>
  )
}

export default App;
