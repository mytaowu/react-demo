import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import Nopermission from './nopermission/Nopermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'

export default function NewsSandbox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>

      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/user-manage/list" component={UserList}/>
        <Route path="/right-manage/role/list" component={RoleList}/>
        <Route path="/right-manage/right/list" component={RightList}/>

        {/* 配置启动时进入home */}
        <Redirect from="/" to="/home" exact/> 
        {/* 未配置的路由进入友好提示页 */}
        <Route path="*" component={Nopermission}/>
      </Switch>
    </div>
  )
}
