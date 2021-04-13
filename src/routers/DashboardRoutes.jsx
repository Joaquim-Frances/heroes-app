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
                    <Route exact path='/marvel' component={MarvelView}/>
                    <Route exact path='/hero/:heroId' component={HeroView}/>
                    <Route exact path='/dc' component={DcView}/>
                    <Route exact path='/search' component={SearchView}/>

                    <Redirect to='/marvel'/>
                </Switch>
            </div>
        </>
    )
}
