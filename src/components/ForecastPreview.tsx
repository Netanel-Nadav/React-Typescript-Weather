import { useState } from 'react';


import { Forecast } from '../models/Forecast'
import { utilService } from '../services/utilService';
import { AiOutlineHeart } from '../../node_modules/react-icons/ai'
import { TbTemperature } from '../../node_modules/react-icons/tb'

interface IProps {
    dailyForecast: Forecast
}

export const ForecastPreview = ({ dailyForecast }: IProps) => {

    const [isCelsius, setIsCelsius] = useState(false)

    const handleLike = () => {

    }

    const { Date, EpochDate, Temperature, Day, Night } = dailyForecast
    return (
        <div className="forecast-preview card">
            <div className="card-header">
                <div className="icon-container">
                    <img src={`https://developer.accuweather.com/sites/default/files/${Day.Icon < 10 ? `0${Day.Icon}` : `${Day.Icon}`}-s.png`} alt="" />
                </div>
            </div>
            <div className="card-body flex column align-center justify-center">
                <p className='fs-0 text-muted fw-700'>{utilService.formatDate(Date)}</p>
                <p className='fw-700 fs-1-1 color-secondary'>{Day.IconPhrase}</p>
                <p className='fw-300 fs-3'>{`${isCelsius ? utilService.avrage(Temperature.Maximum.Value, Temperature.Minimum.Value) : utilService.farenheitToCelsius(Temperature.Minimum.Value, Temperature.Maximum.Value)}`} {isCelsius ? "℉" : "℃"}</p>
            </div>
            <div className="card-actions flex g-1 space-between align-center">
                <div className="wrapper flex align-center">
                    <button className="btn flex align-center justify-center" onClick={() => setIsCelsius(!isCelsius)}><TbTemperature /></button>
                </div>
            </div>
        </div>
    )
}
