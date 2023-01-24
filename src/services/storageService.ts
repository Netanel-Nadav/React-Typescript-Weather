
const saveToSession = (key: string, data: any): void => {
    return sessionStorage.setItem(key, JSON.stringify(data))
}

const loadFromSession = (key: string) => {
    const value = sessionStorage.getItem(key)
    if (typeof value === "string") {
        return JSON.parse(value)
    }
}

const saveToStorage = (key: string, data: any): void => {
    return localStorage.setItem(key, JSON.stringify(data))
}

const loadFromStorage = (key: string) => {
    const value = localStorage.getItem(key)
    if (typeof value === 'string') {
        return JSON.parse(value)
    }
}


export const storageService = {
    saveToStorage,
    loadFromStorage,
    saveToSession,
    loadFromSession
}