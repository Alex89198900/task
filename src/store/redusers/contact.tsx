import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QweryType } from 'types';

const initialState: Array<QweryType> =  [] ;

const contact = createSlice({
  name: 'formArr',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<QweryType>) => {
        state.length=0
        state.push(action.payload);
      },
      prepare: (data: QweryType) => ({
        payload: data as QweryType,
      }),
    },
  },
});

export const { addContact } = contact.actions;
export default contact.reducer;
