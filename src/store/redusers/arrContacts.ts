import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QweryType } from 'types';

const initialState: Array<string> =  [] ;

const arrContacts = createSlice({
  name: 'arrContacts',
  initialState,
  reducers: {
    addContactArr: {
      reducer: (state, action: PayloadAction<string>) => {
        state.push(action.payload);
      },
      prepare: (data: string) => ({
        payload: data as string,
      }),
    },
  },
});

export const { addContactArr } = arrContacts.actions;
export default arrContacts.reducer;
