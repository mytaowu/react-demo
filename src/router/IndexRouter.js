import React from 'react'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from "../views/login/Login"
import NewsSandbox from "../views/sandbox/NewsSandbox"

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" render = {() => 
          true ? <NewsSandbox /> : <Redirect to="/login" />
        } />
      </Switch>
    </HashRouter>
  )
}
