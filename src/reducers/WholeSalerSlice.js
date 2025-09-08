import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../stores/api";



export const getAllWholeSaler = createAsyncThunk(
    'wholeSaler/getAllWholeSaler',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('super-admin/wholesaler-list');
            console.log("response: ", response);

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

export const wholeSalerActiveInActive = createAsyncThunk(
    'wholeSaler/wholeSalerActiveInActive',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('super-admin/wholesaler-activation', userInput);
            console.log("response: ", response);

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
export const verifyWholeSeller = createAsyncThunk(
    'wholeSaler/verifyWholeSeller',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('super-admin/verify-wholesaler', userInput);
            console.log("response: ", response);

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

export const addWholeSeller = createAsyncThunk(
    'wholeSaler/AddWholeSeller',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('super-admin/add-wholesaler', userInput);
            console.log("response: ", response);

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
const initialState = {
    loading: false,
    error: false,
    allWholeSaler: [],
    verifiedWholeSeller: "",
    newWholeSeller: ""
}
const WholeSalerSlice = createSlice(
    {
        name: 'wholeSaler',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getAllWholeSaler.pending, (state) => {
                state.loading = true;
            })
                .addCase(getAllWholeSaler.fulfilled, (state, { payload }) => {
                    state.loading = false;
                    state.error = false;
                    state.allWholeSaler = payload.data;
                })
                .addCase(getAllWholeSaler.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(verifyWholeSeller.pending, (state) => {
                    state.loading = true
                })
                .addCase(verifyWholeSeller.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.error = false
                    state.verifiedWholeSeller = payload
                })
                .addCase(verifyWholeSeller.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(addWholeSeller.pending, (state) => {
                    state.loading = true
                })
                .addCase(addWholeSeller.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.error = false
                    state.newWholeSeller = payload
                })
                .addCase(addWholeSeller.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
        }
    }
)
export default WholeSalerSlice.reducer;