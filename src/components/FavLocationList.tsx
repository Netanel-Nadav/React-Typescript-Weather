import React from 'react'
import { LikedLocation } from '../models/LikedLocation'
import { FavLocationCard } from './FavLocationCard'

interface IProps {
    favLocations: LikedLocation[]
}

export const FavLocationList: React.FC<IProps> = ({ favLocations }) => {
    return (
        <section className="fav-location-list forecast-list">
            {favLocations.map(favLoc => <FavLocationCard key={favLoc.Key} favLoc={favLoc} />)}
        </section>
    )
}
