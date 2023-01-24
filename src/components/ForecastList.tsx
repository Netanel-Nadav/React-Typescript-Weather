
import { Forecast } from "../models/Forecast";
import { ForecastPreview } from "./ForecastPreview"


interface IProps {
    DailyForecasts: Forecast[]
}

export const ForecastList = ({ DailyForecasts } : IProps) : JSX.Element => {
    return (
        <section title="Weekly Forecast" className="forecast-list">
            {DailyForecasts.map((dailyForecast: Forecast) => <ForecastPreview dailyForecast={dailyForecast} key={dailyForecast.Date} />)}
        </section>
    )
}
