import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcView } from '../components/dc/DcView'
import { HeroView } from '../components/heroes/HeroView'
import { MarvelView } from '../components/marvel/MarvelView'
import { SearchView } from '../components/search/SearchView'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-4'>
                <Switch>
                    <Route exact path='heroes-app/marvel' component={MarvelView}/>
                    <Route exact path='heroes-app/hero/:heroId' component={HeroView}/>
                    <Route exact path='heroes-app/dc' component={DcView}/>
                    <Route exact path='heroes-app/search' component={SearchView}/>

                    <Redirect to='heroes-app/marvel'/>
                </Switch>
            </div>
        </>
    )
}
