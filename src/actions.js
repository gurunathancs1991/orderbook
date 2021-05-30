

// These are our action types
export const UPDATE_DATA = "UPDATE_DATA"

export const UPDATE_CHANNEL = "UPDATE_CHANNEL"

export const INIT_DATA = "INIT_DATA"

// Now we define actions
export function updateDataRequest(payload){
    return {
        type: UPDATE_DATA,
        payload
    }
}

export function InitDataRequest(payload){
    return {
        type: INIT_DATA,
        payload
    }
}



