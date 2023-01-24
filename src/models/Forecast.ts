export interface Forecast {
    Date: string
    Day: {
        HasPrecipitation: boolean,
        Icon: number,
        IconPhrase: string
    },
    EpochDate: number,
    Link: string,
    MobileLink: string,
    Night: {
        HasPrecipitation: boolean,
        Icon: number,
        IconPhrase: string
    },
    Sources: string[],
    Temperature: {
        Maximum: {
            Unit: string,
            UnitType: number,
            Value: number
        },
        Minimum: {
            Unit: string,
            UnitType: number,
            Value: number
        }
    }
}


export interface Headline {
    Category: string,
    EffectiveDate: Date,
    EffectiveEpochDate: number,
    EndDate: number | null,
    EndEpochDate: number | null,
    Link: string,
    MobileLink: string,
    Severity: number,
    Text: string
}


export interface DailyForecast {
    DailyForecasts: Forecast[],
    Headline: Headline
}