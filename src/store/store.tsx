import { configureStore } from '@reduxjs/toolkit';
import { storeApi } from './redusers/apireduser';
import { apiData } from './redusers/apireduserData';
import { setupListeners } from '@reduxjs/toolkit/query';
import inputSlice from './redusers/searchreduser';
import formReducer from './redusers/contact';
import arrContacts from './redusers/arrContacts'


export const store = configureStore({
  reducer: {
    contact: formReducer,
    arrContacts:arrContacts,
    [storeApi.reducerPath]: storeApi.reducer,
    [apiData.reducerPath]: apiData.reducer,
    input: inputSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
