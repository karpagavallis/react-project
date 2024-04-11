import { configureStore } from '@reduxjs/toolkit'

const initialValue = { "position": 0 }

const myReducer = (state = initialValue, action) => {
    if (action.type == 'designer') {
        if (state.count == 0) {
            console.log("Store Closed")
            return {
                "position": state.position 
            }
        } else {
            return {
                "position": state.position + 1
            }
        }
    } else if (action.type == 'developer') {
        return {
            "position": state.position + 2
        }
    } else {
        return {
            "position": state.position
        }
    }
}

const store = configureStore({
    reducer: myReducer
})

export default store