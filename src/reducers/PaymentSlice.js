import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import errorHandler from '../stores/errorHandler';
import api from '../stores/api';

//stripe payment
export const stripePayment = createAsyncThunk(
  'user/strip-payment',
  async (entity, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/payment', entity);
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

export const stripePlanKeys = createAsyncThunk(
  'user/stripe-plan-keys',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/user/stripe-plan-keys');
      // console.log('stripe-key', response);
      if (response?.data?.status_code === 200) {
        // console.log('response.data', response.data);
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
  stripePublishableKey: null,
  stripeClientSecret: null,
  stripePromise: null,
  options: null,
  customer_id: null,
  subscription_id: null,
};

const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(stripePayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(stripePayment.fulfilled, (state, { payload }) => {
        state.loading = false;
        const { clientSecret, customer_id, subscription_id } = payload;
        state.stripeClientSecret = clientSecret;
        state.customer_id = customer_id;
        state.subscription_id = subscription_id;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(stripePayment.rejected, (state, response) => {
        state.loading = false;
        state.error = true;
        state.message =
          response.payload !== undefined && response.payload.message
            ? response.payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(stripePlanKeys.pending, (state) => {
        state.loading = true;
      })
      .addCase(stripePlanKeys.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        state.loading = false;
        const { stripe_publishable_key } = payload;
        state.stripePublishableKey = stripe_publishable_key;
        console.log('stripe_publishable_key', stripe_publishable_key);
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(stripePlanKeys.rejected, (state, response) => {
        state.loading = false;
        state.error = true;
        state.message =
          response.payload !== undefined && response.payload.message
            ? response.payload.message
            : 'Something went wrong. Try again later.';
      });
  },
});

export default PaymentSlice.reducer;
