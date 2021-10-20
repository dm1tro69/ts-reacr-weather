import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './styles/index.scss'
import Home from "./p[ages/Home/components/Home";
import MonthStatistics from "./p[ages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";

function App() {
  return (
      <div className={'container'}>
          <Header/>
    <Switch>
     <Route exact path={'/'} component={Home}/>
     <Route exact path={'/month-statistics'} component={MonthStatistics}/>
    </Switch>
      </div>
  );
}

export default App;
