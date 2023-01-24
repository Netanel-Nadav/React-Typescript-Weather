

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
    let API_KEYS = ['pBDDqIasgviQY7MqUAXliLGBfNm152dT', 'zPPGOqFZPB8wBMwXfEKBWhhZWkjs0pYa', 'qW4CYoO3kuni24BlFEAcD8G0zK7FcEPG', 'Se8smdgYWyN0cuvPGjcQkF2nOMwAVx8w']
    const randomNum = Math.floor(Math.random() * API_KEYS.length)
    return API_KEYS[randomNum]
}


export const utilService = {
    formatDate,
    avrage,
    farenheitToCelsius,
    getAPIKey
}