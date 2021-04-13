import React from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';


export const SearchView = ({history}) => {

    const location = useLocation();

    const{ query = ''} = queryString.parse( location.search);

    
    const [formValues, handleInputChange, reset] = useForm( {searchText: query});
    
    const {searchText} = formValues;
    
    const heroesFiltered = heroes;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Hero</h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input type="text" onChange={handleInputChange} name='searchText' autoComplete="off" value={searchText} placeholder='Search your hero!' className='form-control'/>
                        <button type='submit'  className='btn mt-1 btn-block btn-outline-primary' > Search </button>
                    </form>

                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard key={hero.id}{...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
