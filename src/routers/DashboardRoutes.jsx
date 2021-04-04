import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcView } from '../components/dc/DcView'
import { HeroView } from '../components/heroes/HeroView'
import { MarvelView } from '../components/marvel/MarvelView'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/marvel' component={MarvelView}/>
                    <Route exact path='/marvel/:heroeId' component={HeroView}/>
                    <Route exact path='/dc' component={DcView}/>

                    <Redirect to='/marvel'/>
                </Switch>
            </div>
        </>
    )
}
