const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeActionType): InitThremeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return { ...state, themeId: action.payload.id }
        }
        default:
            return state
    }
}

//export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

export const changeThemeId = (id: number) => {
    return {
        type: 'SET_THEME_ID',
        payload: {
            id
        }
    } as const
}

export type changeThemeIdType = ReturnType<typeof changeThemeId>
export type ThemeActionType = changeThemeIdType

export type InitThremeStateType = {
    themeId: number
}