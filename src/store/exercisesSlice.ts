import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

interface Exercises {
  id: string
  category: string
	image: string
	title: string
	description: string
}

interface ExercisesState {
	list: Exercises[]
  status: string
  error: string | null
}

const initialState: ExercisesState = {
  list: [],
  status: 'idle',
  error: null
}

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getExercises.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getExercises.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(getExercises.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export const getExercises = createAsyncThunk('exercises/getExercises', async (category: string) => {
  const response = await api.get(`/exercises?category=${category}`)
  return response.data
})

export const exercicesActions = exercisesSlice.actions

export const exercisesReducer = exercisesSlice.reducer
