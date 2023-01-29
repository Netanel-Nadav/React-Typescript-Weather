import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { DailyForecast } from '../models/Forecast'
import { utilService } from '../services/utilService'

import { useGeolocation } from './useGeolocation'


import { DataActionTyps } from '../store/reducers/dataSlice'
import { useDispatch } from 'react-redux'


const API_KEY = utilService.getAPIKey(1)


export const useAccuWeather = () => {
    const dispatch = useDispatch()
    const { location } = useGeolocation()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState<null | any>(null)
    const [forecastData, setForecastData] = useState<null | DailyForecast>(null)




    useEffect(() => {
        if (!location) return
        getData()
    }, [location])


    const getData = async () => {
        const URL = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${location?.lat}%2C${location?.lon}&details=false`
        try {
            setIsLoading(true)
            const { data } = await axios.get(URL)
            setData(data)
            getWeather(data.Key)
            setIsLoading(false)
        } catch (err: any) {
            setError(err)
        }
    }

    const getDataForSearchLocation = async (searchTerm: string) => {
        dispatch({ type: DataActionTyps.SET_SEARCH_TERM, action: searchTerm })
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


    return { data, forecastData, isLoading, error, getDataForSearchLocation }
}
