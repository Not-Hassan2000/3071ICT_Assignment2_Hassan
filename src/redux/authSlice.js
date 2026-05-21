import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: null,
    loggedIn: false,
  },

  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },

    signOut: (state) => {
      state.user = null;
      state.loggedIn = false;
    },

    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const {
  signIn,
  signOut,
  updateProfile,
} = authSlice.actions;

export default authSlice.reducer;