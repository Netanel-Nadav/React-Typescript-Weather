
import { AiOutlineHeart } from 'react-icons/ai'

import { useParams } from 'react-router-dom'
import { ForecastList } from '../components/ForecastList'
import { SearchInput } from '../components/SearchInput'
import { useAccuWeather } from '../hooks/useAccuWeather'
import { favoriteService } from '../services/favoriteService'


export const Home = () => {

  
  const { data, isLoading, forecastData, error, getDataForSearchLocation } = useAccuWeather()
  const { id } = useParams()


  const handleLike = () => {
    const likedPositions = favoriteService.add(data)
  }


  if (isLoading || !forecastData || !data) return (
    <>
      {error && <h1>{error}</h1>}
      <SearchInput getDataForSearchLocation={getDataForSearchLocation} />
      <h1>Loading...</h1>
    </>
  )

  const { DailyForecasts } = forecastData

  return (
    <div className="home">
      {id && <SearchInput id={id} getDataForSearchLocation={getDataForSearchLocation} />}
      {!id &&<SearchInput getDataForSearchLocation={getDataForSearchLocation} />}
      
      <h1 className='text-center fs-3'>Weekly weather in {data.LocalizedName}</h1>
      <button onClick={handleLike} className="btn flex align-center justify-center"><AiOutlineHeart /></button>
      <ForecastList DailyForecasts={DailyForecasts} />
    </div>
  )
}
