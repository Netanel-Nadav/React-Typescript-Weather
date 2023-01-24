

const avrage = (num1: number, num2: number): number => {
    return  Math.floor((num1 + num2) / 2)
}


const farenheitToCelsius = (min: number, max: number): number => {
    const farenheit = avrage(min, max)
    return Math.floor((farenheit - 32) * 5/9 )
}

const formatDate = (dateSTR: string): string => {
    const year = dateSTR.slice(0,4)
    const month = dateSTR.slice(5,7)
    const day = dateSTR.slice(8,10)
    return `${day}/${month}/${year}`
}


const getAPIKey = () => {
    let API_KEYS = [process.env.REACT_APP_API_KEY, process.env.REACT_APP_API_KEY2, process.env.REACT_APP_API_KEY3, process.env.REACT_APP_API_KEY4]
    const randomNum = Math.floor(Math.random() * API_KEYS.length)
    return API_KEYS[randomNum]
}


export const utilService = {
    formatDate,
    avrage,
    farenheitToCelsius,
    getAPIKey
}