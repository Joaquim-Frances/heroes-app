import React from 'react'
import { useParams } from 'react-router'
import { getHeroById } from '../selectors/getHeroById';

export const HeroView = () => {

    const { heroId } = useParams();
    
    const hero = getHeroById( heroId );

    console.log( hero );



    return (
        <div>
            <h1>Hero View</h1>
        </div>
    )
}
