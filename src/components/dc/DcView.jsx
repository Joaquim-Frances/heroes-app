import React from 'react'
import { HeroList } from '../heroes/HeroList'


export const DcView = () => {
    return (
        <div>
            <h1>DC Heroes</h1>
            <HeroList publisher='DC Comics' />
        </div>
    )
}
