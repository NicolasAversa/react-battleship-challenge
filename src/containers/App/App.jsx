import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'ui-neumorphism/dist/index.css';
import Start from '../Start/Start';
import Game from '../Game/Game';
import SplashScreen from '../SplashScreen/SplashScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/splashscreen">
          <SplashScreen />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
