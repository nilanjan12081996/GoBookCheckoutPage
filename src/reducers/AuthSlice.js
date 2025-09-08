import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../stores/api';
import errorHandler from '../stores/errorHandler';
import Cookies from 'js-cookie';

//get all roles of users
export const getAlluserType = createAsyncThunk(
  'userType/getAlluserType',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('role/get-all-roles',);
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
)

export const registerUser = createAsyncThunk(
  'user/register',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('user/auth/register', userInput);
      if (response?.data?.status_code === 201) {
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

export const registerWholeSeller = createAsyncThunk(
  'user/registerWholeSeller',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('wholesaler/auth/register', userInput);
      if (response?.data?.status_code === 201) {
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
)

export const sendOtp = createAsyncThunk(
  'user/send-otp',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('user/send-otp', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        if (response?.data?.errors) {
          return rejectWithValue(response.data.errors);
        } else {
          return rejectWithValue('Failed to send OTP');
        }
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// export const verifyOtp = createAsyncThunk(
//   'user/verify-otp',
//   async (userInput, { rejectWithValue }) => {
//     try {
//       const response = await api.post('user/verify-otp', userInput);
//       if (response?.data?.status_code === 200) {
//         return response.data;
//       } else {
//         if (response?.data?.errors) {
//           return rejectWithValue(response.data.errors);
//         } else {
//           return rejectWithValue('Failed to verify OTP');
//         }
//       }
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );


//login Admin
export const login = createAsyncThunk(
  'auth/login',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('user/auth/login', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data?.response);

      }
    } catch (err) {
      let errors = errorHandler(err?.response?.data);
      return rejectWithValue(errors);
    }
  }
);
//log in service provider
export const loginServiceProvider = createAsyncThunk(
  'auth/loginServiceProvider',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('service-provider/auth/login', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data?.response);

      }
    } catch (err) {
      let errors = errorHandler(err?.response?.data);
      return rejectWithValue(errors);
    }
  }
)

//login wholesaler

export const wholeSalerLogin = createAsyncThunk(
  'auth/wholeSalerLogin',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('wholesaler/auth/login', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data?.response);

      }
    } catch (err) {
      let errors = errorHandler(err?.response?.data);
      return rejectWithValue(errors);
    }
  }
)
//otp admin
export const otpVerify = createAsyncThunk(
  'auth/otp',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('super-admin/auth/verify-otp', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data?.response);

      }
    } catch (err) {
      let errors = errorHandler(err?.response?.data);
      return rejectWithValue(errors);
    }
  }
)
//otp wholeseller
export const otpVerifyWholesaler = createAsyncThunk(
  'auth/otpWholesaler',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('wholesaler/auth/verify-otp', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data?.response);

      }
    } catch (err) {
      let errors = errorHandler(err?.response?.data);
      return rejectWithValue(errors);
    }
  }
)

//refresh Token admin
export const refreshToken = createAsyncThunk(
  'auth/refresh-token',
  async (userInput, { rejectWithValue }) => {
    try {


      const response = await api.post('super-admin/auth/get-access-token', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data?.response);

      }
    } catch (err) {
      let errors = errorHandler(err?.response?.data);
      return rejectWithValue(errors);
    }
  }
)

export const makePayment = createAsyncThunk(
  'user/payment',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/payment', userInput);
      if (response?.data?.status_code === 200) {
        console.log('response of makepayment', response.data);
        return response.data;
      } else {
        throw Error('Failed to register user');
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Google Sign In
export const googleSignIn = createAsyncThunk(
  'auth/google-signIn',
  async (token, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/api/google-login', {
        token: token,
      });
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        // Handle the case when status code is not 200
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      let errors = errorHandler(error);
      return rejectWithValue(errors);
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
  usersRole: [],
  refreshTokens: "",
  otpMessage: "",
  currentWholeSeller: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = {};
    },
    resetAfterLoggedIn: (state) => {
      state = { ...initialState, isLoggedIn: true };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      sessionStorage.removeItem('podToken');
     
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.message = null;
        state.loading = true;
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log("Payload", payload);

        state.loading = false;
        state.message = payload;
        sessionStorage.setItem(
          'mtaToken',
          JSON.stringify({ token: payload?.token })
        );

      })

      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // .addCase(verifyOtp.pending, (state) => {
      //   state.message = null;
      //   state.error = null;
      //   state.loading = true;
      // })

      // .addCase(verifyOtp.fulfilled, (state, { payload }) => {
      //   const { message } = payload;
      //   state.loading = false;
      //   state.currentUser.otp_verified = 1;
      //   console.log('otp->', state.currentUser);
      //   state.message = message;
      // })

      // .addCase(verifyOtp.rejected, (state, response) => {
      //   state.loading = false;
      //   state.message =
      //     response.payload !== undefined && response.payload.message
      //       ? response.payload.message
      //       : 'Something went wrong. Try again later.';
      // })

      .addCase(sendOtp.pending, (state) => {
        state.error = null;
        state.loading = true;
      })

      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.currentUser.otp_verified = 1;
      })

      .addCase(sendOtp.rejected, (state, response) => {
        state.loading = false;
        state.message =
          response.payload !== undefined && response.payload.message
            ? response.payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(makePayment.pending, (state) => {
        state.loading = true;
      })

      .addCase(makePayment.fulfilled, (state) => {
        state.loading = false;
        state.currentUser.payment_status = true;
        state.currentUser.payment_message =
          'Subscription created successfully.';
      })

      .addCase(makePayment.rejected, (state) => {
        state.loading = true;
      })

      .addCase(login.pending, (state) => {
        state.isFetching = true;
        state.isLoggedIn = false;
        state.error = false;
      })

      .addCase(login.fulfilled, (state, { payload }) => {
        const { user_token, user_data, refresh_token } = payload;
        console.log("payload", payload);
        state.isLoggedIn = true;
        // state.currentUser = {
        //   user_id: user_id,
        //   email: email,
        //   name: name,
        // };
        localStorage.setItem('user_id', JSON.stringify({ user_id: user_data?.id }))
        sessionStorage.setItem(
          'podToken',
          JSON.stringify({ token: user_token })
        );
        Cookies.set('refresh_token', refresh_token, { path: '/', secure: true });

        // localStorage.setItem('userId', JSON.stringify({ user_id: user_id }));
        // localStorage.removeItem('regToken');
      })

      .addCase(login.rejected, (state, { payload }) => {
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(googleSignIn.pending, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isGoogleLoggedIn = false;
        // state.subscription = false;
        state.error = false;
      })

      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        const { access_token, user_id, email, otp_verified } = payload;
        state.isGoogleLoggedIn = true;
        console.log('payload in google sign in ', payload);

        console.log('state.isGoogleLoggedIn', state.isGoogleLoggedIn);
        state.isLoggedIn = true;
        state.currentUser = {
          user_id: user_id,
          email: email,
          otp_verified: otp_verified,
        };
        localStorage.setItem(
          'userToken',
          JSON.stringify({ token: access_token })
        );
      })

      .addCase(googleSignIn.rejected, (state, { payload }) => {
        state.error = true;
        state.subscription = false;
        state.isGoogleLoggedIn = false;
        state.message =
          payload !== undefined
            ? payload
            : 'Something went wrong. Try again later.';
        console.log(
          'state.isGoogleLoggedIn -> rejected',
          state.isGoogleLoggedIn
        );
      })
      .addCase(getAlluserType.pending, (state) => {
        state.loading = true
      })
      .addCase(getAlluserType.fulfilled, (state, { payload }) => {
        state.loading = false
        state.usersRole = payload
        state.error = false
      })
      .addCase(getAlluserType.rejected, (state, { payload }) => {
        state.loading = false
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(refreshToken.pending, (state) => {
        state.loading = true
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
        localStorage.setItem(
          'userToken',
          JSON.stringify({ token: payload?.token })
        );

      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
        // localStorage.removeItem('userToken');
        Cookies.remove('refresh_token', { path: '/' });
      })
      .addCase(loginServiceProvider.pending, (state) => {
        state.loading = true
      })
      .addCase(loginServiceProvider.fulfilled, (state, { payload }) => {
        state.loading = false
        const { token, data, refresh_token } = payload;
        console.log("payload", payload);
        state.isLoggedIn = true;
        localStorage.setItem(
          'userToken',
          JSON.stringify({ token: token })
        );
        Cookies.set('refresh_token', refresh_token, { path: '/', secure: true });
      })
      .addCase(loginServiceProvider.rejected, (state, { payload }) => {
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(otpVerify.pending, (state) => {
        state.loading = true
      })
      .addCase(otpVerify.fulfilled, (state, { payload }) => {
        state.loading = false
        state.otpMessage = payload
        state.error = false
      })
      .addCase(otpVerify.rejected, (state, { payload }) => {
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(wholeSalerLogin.pending, (state) => {
        state.loading = true
      })
      .addCase(wholeSalerLogin.fulfilled, (state, { payload }) => {
        state.loading = false
        const { token, data, refresh_token } = payload;
        console.log("payload", payload);
        state.isLoggedIn = true;
        localStorage.setItem(
          'userToken',
          JSON.stringify({ token: token })
        );
        Cookies.set('refresh_token', refresh_token, { path: '/', secure: true });
      })
      .addCase(wholeSalerLogin.rejected, (state, { payload }) => {
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(registerWholeSeller.pending, (state) => {
        state.message = null;
        state.loading = true;
        state.error = null;
      })

      .addCase(registerWholeSeller.fulfilled, (state, { payload }) => {

        state.loading = false;
        state.message = payload;

      })

      .addCase(registerWholeSeller.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});
export const { clearCurrentUser, resetAfterLoggedIn, logout } =
  authSlice.actions;

export default authSlice.reducer;
