import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../stores/api";


export const getAllProviders = createAsyncThunk(
    'providers/getAllProviders',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('super-admin/service-provider-list');
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
export const serviceProviderActiveInActive = createAsyncThunk(
    'providers/serviceProviderActiveInActive',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('super-admin/service-provider-activation', userInput);
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
export const addServiceProvider = createAsyncThunk(
    'providers/addServiceProvider',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('super-admin/add-service-provider', userInput);
            console.log("response: ", response);

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

export const productOfProvider = createAsyncThunk(
    'providers/productOfProvider',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/service-provider/product/get-all-products');
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
export const addProductOfProvider = createAsyncThunk(
    'providers/addProductOfProvider',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/service-provider/product/add', userInput);
            console.log("response: ", response);

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

export const editProductOfProvider = createAsyncThunk(
    'providers/editProductOfProvider',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/service-provider/product/edit-product', userInput);
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
export const updateProductOfProvider = createAsyncThunk(
    'providers/updateProductOfProvider',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/service-provider/product/update', userInput);
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
    allProviders: {},
    addProviderMsg: "",
    allProduct: [],
    addProductMsg: "",
    editProductData: {},
    productUpdatemsg: ""
}
const ServiceProviderSlice = createSlice(
    {
        name: 'serviceProviders',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getAllProviders.pending, (state) => {
                state.loading = true
            })
                .addCase(getAllProviders.fulfilled, (state, { payload }) => {
                    console.log("payload2", payload);

                    state.loading = false
                    state.allProviders = payload?.data
                    state.error = false
                })
                .addCase(getAllProviders.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(addServiceProvider.pending, (state) => {
                    state.loading = true
                })
                .addCase(addServiceProvider.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.addProviderMsg = payload
                    state.allProviders = false
                })
                .addCase(addServiceProvider.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(productOfProvider.pending, (state) => {
                    state.loading = true
                })
                .addCase(productOfProvider.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.allProduct = payload?.data
                    state.error = false
                })
                .addCase(productOfProvider.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(addProductOfProvider.pending, (state) => {
                    state.loading = true
                })
                .addCase(addProductOfProvider.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.addProductMsg = payload
                    state.error = false
                })
                .addCase(addProductOfProvider.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(editProductOfProvider.pending, (state) => {
                    state.loading = true
                })
                .addCase(editProductOfProvider.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.editProductData = payload
                    state.error = false
                })
                .addCase(editProductOfProvider.rejected, (state, { payload }) => {
                    state.loading = false;
                    console.error("Error payload:", payload);
                    state.message =
                        payload.payload !== undefined && payload.payload.message
                            ? payload.payload.message
                            : 'Something went wrong. Try again later.';
                })
                .addCase(updateProductOfProvider.pending, (state) => {
                    state.loading = true
                })
                .addCase(updateProductOfProvider.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.productUpdatemsg = payload
                    state.error = false
                })
                .addCase(updateProductOfProvider.rejected, (state, { payload }) => {
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
export default ServiceProviderSlice.reducer;