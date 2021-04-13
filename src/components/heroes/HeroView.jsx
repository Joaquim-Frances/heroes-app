import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../selectors/getHeroById';

export const HeroView = ({history}) => {

    const { heroId } = useParams();
    
    const hero = getHeroById( heroId );

    const handleBack = () => {

        if(history.length <= 2) {
            hero.publisher === 'Marvel Comics' && history.push('/');
            hero.publisher === 'DC Comics' && history.push('/dc');
         } else {
           history.goBack();
         }
    }

    if(!hero){
        return <Redirect to='/' />
    }

    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    
   


    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`../assets/heroes/${heroId}.jpg`} alt={superhero} className='img-thumbnail'/>
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'> 
                <li className='list-group-item'><b>Alter Ego:  </b>{alter_ego} </li>
                <li className='list-group-item'><b>Publisher:  </b>{publisher} </li>
                <li className='list-group-item'><b>First Appearance:  </b>{first_appearance} </li>
                </ul>
                <button className='btn btn-outline-info mt-5 ml-4' onClick={handleBack}>
                    Back
                </button>
            </div>
        </div>
    )
}
