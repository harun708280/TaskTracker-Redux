import { configureStore } from '@reduxjs/toolkit'
import taskSlice  from './features/Task/taskSlice'

export const store = configureStore({
    reducer: {
        allTask:taskSlice
    },
  })

export default store