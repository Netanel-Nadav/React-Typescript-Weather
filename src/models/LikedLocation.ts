export interface LikedLocation {
    AdministrativeArea: {
        CountryID: string,
        EnglishName: string,
        EnglishType: string,
        ID: string,
        Level: number,
        LocalizedName: string,
        LocalizedType: string
    },
    Country: {
        EnglishName: string,
        ID: string,
        LocalizedName: string
    },
    DataSets: string[],
    EnglishName: string,
    GeoPosition: {
        Elevation: {
            Imperial: {
                Unit: string,
                UnitType: number,
                Value: number
            },
            Metric: {
                Unit: string,
                UnitType: number,
                Value: number
            },
        }
        Latitude: number,
        Longitude: number
    },
    IsAlias: boolean,
    Key: string,
    LocalizedName: string,
    ParentCity: {
        EnglishName: string,
        Key: string,
        LocalizedName: string
    },
    PrimaryPostalCode: string,
    Rank: number,
    Region: {
        EnglishName: string,
        ID: string,
        LocalizedName: string
    },
    SupplementalAdminAreas: string[],
    TimeZone: {
        Code: string,
        GmtOffset: number,
        IsDaylightSaving: boolean,
        Name: string,
        NextOffsetChange: string
    },
    Type: string,
    Version: number
}