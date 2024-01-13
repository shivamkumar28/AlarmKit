import { combineReducers, configureStore } from '@reduxjs/toolkit'
import generalSlice from './general.slice';


const rootReducer = combineReducers({
    general: generalSlice,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch