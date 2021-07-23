import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login";
import {Provider} from "react-redux";
import store from "./store/store";

const Root =()=>{
    return(
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Login}/>
            </Switch>
        </BrowserRouter>
        </Provider>
    )
}
export default Root
