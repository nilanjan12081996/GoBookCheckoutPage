import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../stores/api';
import errorHandler from '../stores/errorHandler';


export const contactAdmin = createAsyncThunk(
    'user/contacts',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/user/contacts', userInput);
        if (response?.data?.status_code === 200) {
          return response.data;
        } else {
          if (response?.data?.errors) {
            return rejectWithValue(response.data.errors);
          } else {
            return rejectWithValue('Something went wrong.');
          }
        }
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );

  const initialState = {
    message: null,
    error: null,
    loading: false,
    isLoggedIn: false,
    currentUser: {},
    isGoogleLoggedIn: null,
  };



  const authSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(contactAdmin.pending, (state) => {
          state.message = null;
          state.loading = true;
          state.error = null;
        })
  
        .addCase(contactAdmin.fulfilled, (state, { payload }) => {
          const { user_id, email, otp_verified, access_token } = payload;
          state.loading = false;
          state.message = payload;
          state.currentUser = {
            user_id: user_id,
            email: email,
            otp_verified: otp_verified,
          };
        })
  
        .addCase(contactAdmin.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        })
    },
  });
  export const {  } =
    authSlice.actions;
  
  export default authSlice.reducer;