import { createContext, useReducer } from 'react'


enum ThemeActionKind {
    SWITCH_TO_DARK ='SWITCH_TO_DARK',
    SWITCH_TO_LIGHT = 'SWITCH_TO_LIGHT'
}

interface ThemeAction {
    type: ThemeActionKind,
    payload?: boolean | null
}

type ThemeContextType = {
    isDarkMode: boolean,
    changeTheme?: (val: string) => void
}


const initialState = {
    isDarkMode: false,
}

const ThemeReducer = (state = initialState, { type, payload }: ThemeAction) => {
  switch (type) {

  case ThemeActionKind.SWITCH_TO_DARK:
    return { ...state, isDarkMode: true }
  case ThemeActionKind.SWITCH_TO_LIGHT:
    return { ...state, isDarkMode: false }

  default:
    return state
  }
}



interface Props  {
    children: JSX.Element
}

export const ThemeContext = createContext<ThemeContextType>(initialState)


export const ThemeProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState)


    const changeTheme = (val: string): void => {
        if (val === "dark") dispatch({type: ThemeActionKind.SWITCH_TO_DARK})
        else dispatch({type: ThemeActionKind.SWITCH_TO_LIGHT})
    }

    return (
        <ThemeContext.Provider value={{...state, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}