import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login:(state,action) => {
      state.user = action.payload
    },
    logout: (state) => {
        state.user = null
    }
    
}});



export const {login , logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
// export const selectMail = state => state.mail.value;

export default userSlice.reducer;
