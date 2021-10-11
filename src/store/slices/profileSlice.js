import { createSlice } from '@reduxjs/toolkit';

import { startupThunk } from '../thunks/startupThunk';

const initialState = {
    cedul_usuar: null,
    nomb_usuar: null,
    telef_usuar: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, { payload } ) => ({
      ...state,
      ...payload.data,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(startupThunk.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload.profile,
    }));
  },
});

export const { setProfile, updateLocalProfile, updateMembership, cancelMembership } = profileSlice.actions;
export default profileSlice.reducer;

export const selectProfile = (state) => state.profile;
