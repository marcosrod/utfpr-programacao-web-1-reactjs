import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: '',
}

const stateSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, {payload}) => {
            state.category = payload
        }
    }
})

export const store = configureStore({
  reducer: {category: stateSlice.reducer},
})

export const {setCategory} = stateSlice.actions