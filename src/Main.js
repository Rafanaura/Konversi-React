import React from "react"
import { Route, Switch} from 'react-router-dom';
import BMI from "./pages/BMI"
import Bank from "./pages/Bank"
import PPN from "./pages/PPN"
import Bilangan from "./pages/Bilangan"

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/BMI" component={BMI}/>
                <Route path="/Bank" component={Bank}/>
                <Route path="/PPN" component={PPN}/>
                <Route path="/Bilangan" component={Bilangan}/>
            </Switch>
        )
    }
}

export default Main;