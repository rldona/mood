import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { firestore } from "../../common/firebase";
import { config } from "../../common/config";

import Home from '../../pages/Home';
import Board from '../Board';
import Loading from '../Loading';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const intDataFromFirestore = () => {
    let squareList = [], index = 1;

    for (let i = 0; i < config.positions.length; i++) {
      for (let j = 1; j <= config.positions[i].days; j++) {
        const date = {
          'index': index,
          'mood': 'none',
          'date': {
            'month': config.positions[i].month,
            'day': j,
          },
        };
        squareList.push(date);
        firestore.collection("mood-registry").doc(`${index}`).set(date);
        index++;
      }
    }

    setData(squareList);
  }

  useEffect(() => {
    intDataFromFirestore();
  }, []);

  if (data.length === 0) return (<Loading />);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/board">
              <Board config={config} />
            </Route>
            <Redirect from="*" to="/"/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
