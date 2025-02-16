import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  logged_in: boolean;
  user: {
    mobile?: number;
  };
}

const initialState: AppState = {
  logged_in: false,
  user: {},
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AppState>) => {
      state.logged_in = true;
      state.user = action.payload.user;
    },
    logout: state => {
      state.logged_in = false;
      state.user = {};
    },
  },
});

export const { login, logout } = appSlice.actions;
export default appSlice.reducer;
