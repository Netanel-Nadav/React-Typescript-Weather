import axios from 'axios'
import { useEffect, useState } from 'react'
import { DailyForecast } from '../models/Forecast'
import { storageService } from '../services/storageService'
import { utilService } from '../services/utilService'

import { useGeolocation } from './useGeolocation'


const API_KEY = utilService.getAPIKey()
const STORAGE_KEY = 'user-accu'

export const useAccuWeather = () => {

    const { location } = useGeolocation()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")


    const URL = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${location?.lat}%2C${location?.lon}&details=false`
    const [data, setData] = useState<null | any>(null)

    const [forecastData, setForecastData] = useState<null | DailyForecast>(null)

    useEffect(() => {
        if (!location) return
        getData()
    }, [location])


    const getData = async () => {
        let info = storageService.loadFromSession(STORAGE_KEY)

        if (!info) {
            setIsLoading(true)
            try {
                const { data } = await axios.get(URL)
                setData(data)
                storageService.saveToSession(STORAGE_KEY, data)
                getWeather(data.Key)
            } catch (err: any) {
                setError(err)
                
            }
            setIsLoading(false)
        } else {
            setData(info)
            getWeather(info.Key)
        }
    }

    const getDateForSearchLocation = async (searchTerm: string) => {
        try {
            const { data } = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${searchTerm}`)
            const searchedLocation = data[0]
            setData(searchedLocation)
            getWeather(searchedLocation.Key)
        } catch (err: any) {
            setError(err.message)
        }
    }


    const getWeather = async (key: string) => {
        const FORECAST_URL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
        try {
            const { data } = await axios.get(FORECAST_URL)
            setForecastData(data)
        } catch (err: any) {
            setError(err.message)
        }
    }


    return { data, forecastData, isLoading, error, getDateForSearchLocation }
}
