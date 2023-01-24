import axios from 'axios'
import { useEffect, useState } from 'react'
import { DailyForecast } from '../models/Forecast'
import { utilService } from '../services/utilService'

import { useGeolocation } from './useGeolocation'


export const useAccuWeather = () => {
    const { location } = useGeolocation()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState<null | any>(null)
    const [forecastData, setForecastData] = useState<null | DailyForecast>(null)
    const [APIKeyNum, setAPIKeyNum] = useState(0)



    useEffect(() => {
        if (!location) return
        getData()
    }, [location])


    const getData = async () => {
        let API_KEY = utilService.getAPIKey(APIKeyNum)
        const URL = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${location?.lat}%2C${location?.lon}&details=false`
        try {
            setIsLoading(true)
            const { data } = await axios.get(URL)
            setData(data)
            getWeather(data.Key)
            setIsLoading(false)
        } catch (err: any) {
            setError(err)
            setAPIKeyNum(prevNum => prevNum + 1)
            getData()
        }
    }

    const getDateForSearchLocation = async (searchTerm: string) => {
        let API_KEY = utilService.getAPIKey(APIKeyNum)
        try {
            const { data } = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${searchTerm}`)
            const searchedLocation = data[0]
            setData(searchedLocation)
            getWeather(searchedLocation.Key)
        } catch (err: any) {
            setError(err.message)
            setAPIKeyNum(prevNum => prevNum + 1)
        }
    }


    const getWeather = async (key: string) => {
        let API_KEY = utilService.getAPIKey(APIKeyNum)
        const FORECAST_URL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
        try {
            const { data } = await axios.get(FORECAST_URL)
            setForecastData(data)
        } catch (err: any) {
            setError(err.message)
            setAPIKeyNum(prevNum => prevNum + 1)
            getWeather(key)
        }
    }


    return { data, forecastData, isLoading, error, getDateForSearchLocation }
}
