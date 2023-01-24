import React, { useEffect, useState } from 'react'
import { Location } from '../models/Location'

type Coords = {
    accuracy: number | null,
    altitude: number | null,
    altitudeAccuracy: number | null,
    heading: number | null,
    latitude: number,
    longitude: number,
    speed: number | null
}

type GeolocationPosition = {
    coords: Coords,
    timestamp: number
}


export const useGeolocation = () => {
    const [location, setLocation] = useState<Location | null>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(sucsses)
    }, [])

    const sucsses = ({ coords }: GeolocationPosition) => {
        setLocation({ lat: coords.latitude, lon: coords.longitude })
    }

    return { location }
}
