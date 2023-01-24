import { storageService } from "./storageService"
const STORAGE_KEY = 'favorites-location'

export const favoriteService = {
    query,
    add
}

function query() {
    const favPosition = storageService.loadFromStorage(STORAGE_KEY)
    return favPosition
}

function add(data: any) {
    let dataBase = query()
    if (!dataBase) {
        dataBase = []
        dataBase.push(data)
        storageService.saveToStorage(STORAGE_KEY, dataBase)
    } else {
        const copyDoc = dataBase.find((doc: any) => doc.Key === data.Key)
        if (copyDoc) throw new Error('This Location already exsist')
        else {
            dataBase.push(data)
            storageService.saveToStorage(STORAGE_KEY, dataBase)
        }
    }
}