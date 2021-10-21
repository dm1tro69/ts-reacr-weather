import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './styles/index.scss'
import Home from "./pages/Home/components/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";
import {Popup} from "./shared/Popup/Popup";

function App() {
    return (
        <div className={'global-container'}>
            <Popup/>
            <div className={'container'}>

                <Header/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/month-statistics'} component={MonthStatistics}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
