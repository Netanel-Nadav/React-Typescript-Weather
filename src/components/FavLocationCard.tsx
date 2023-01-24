import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LikedLocation } from '../models/LikedLocation'

interface IProps {
    favLoc: LikedLocation
}


export const FavLocationCard: React.FC<IProps> = ({ favLoc }) => {
    const navigate = useNavigate()
    const { LocalizedName } = favLoc


    const handleClick = () => {
        navigate(`/${LocalizedName}`)
    }

    return (
        <div className="favLoc-card flex align-center justify-center" onClick={handleClick}>
            <h3>{LocalizedName}</h3>
        </div>
    )
}
