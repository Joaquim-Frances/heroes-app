import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelView = () => {
    return (
        <div>
            <h1>Marvel Heroes</h1>
            <HeroList publisher='Marvel Comics' />
        </div>
    )
}
