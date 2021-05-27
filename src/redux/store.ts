import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { recipeSlice } from './recipe/recipe';
import { userSlice } from './user/user';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootPersistConfig = {
  key: 'root',
  storage
};

const recipePersistConfig = {
  key: 'recipe',
  storage,
  whitelist: ['feed', 'loaded']
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['recipeCat', 'userRecipeList', 'userInfo', 'isLoggedIn']
};

const reducers = combineReducers({
  recipe: persistReducer(recipePersistConfig, recipeSlice.reducer),
  user: persistReducer(userPersistConfig, userSlice.reducer)
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware
  ]
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
