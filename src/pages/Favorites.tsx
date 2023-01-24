import React, { useState, useEffect } from 'react'
import { FavLocationList } from '../components/FavLocationList'
import { LikedLocation } from '../models/LikedLocation'
import { favoriteService } from '../services/favoriteService'

export const Favorites = () => {

  const [favLocations, setFavLocations] = useState<null | LikedLocation[]>(null)

  useEffect(() => {
    const favLocations = favoriteService.query()
    setFavLocations(favLocations)
  }, [])


  if (!favLocations) return <h1>Loading..</h1>

  
  return (
    <div className="favorites-page">
      <h1>Here is your Favorites locations</h1>
      <FavLocationList favLocations={favLocations} />
    </div>

  )
}
