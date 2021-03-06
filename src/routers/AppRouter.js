import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import Page404 from '../components/Page404 '
import Header from '../components/Header'


const AppRouter = () => (
   <BrowserRouter>
    <div>
        <Header />   
        <Switch>
            <Route path="/" component= {ExpenseDashboardPage} exact/>
            <Route path="/create" component= {AddExpensePage}/>
            <Route path="/edit/:id" component= {EditExpensePage}/>
            <Route path="/help" component= {HelpPage}/>
            <Route component= {Page404}/>        
        </Switch>
        </div>
   </BrowserRouter>
)

export default AppRouter
