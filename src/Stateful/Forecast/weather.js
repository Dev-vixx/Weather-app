const weather =  {
    weather: [
        {
            coord: {
                lon: 7.88,
                lat: 5.53
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d"
                }
            ],
            base: "stations",
            main: {
                temp: 302.948,
                pressure: 1012.72,
                humidity: 68,
                temp_min: 302.948,
                temp_max: 302.948,
                sea_level: 1012.72,
                grnd_level: 1000.25
            },
            wind: {
                speed: 1.55,
                deg: 287.16
            },
            rain: {
                time: 6.75
            },
            clouds: {
                all: 59
            },
            dt: 1563366153,
            sys: {
                message: 0.0054,
                country: "NG",
                sunrise: 1563340930,
                sunset: 1563385596
            },
            timezone: 3600,
            id: 2327494,
            name: "Abia",
            cod: 200
        ,flag: null
        }
    ],
    showLoader: false,
    showForm: true,
    isLoading: false

}

export default weather;