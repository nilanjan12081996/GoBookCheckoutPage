import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../stores/api';
import errorHandler from '../stores/errorHandler';


export const createCharacterStepone = createAsyncThunk(
    'character/createCharacterStepone',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step1', userInput);
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


  export const createCharacterSteptwo = createAsyncThunk(
    'character/createCharacterSteptwo',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step2', userInput);
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


  export const createCharacterStepthree = createAsyncThunk(
    'character/createCharacterStepthree',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step3', userInput);
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

  export const createCharacterStepfour = createAsyncThunk(
    'character/createCharacterStepfour',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step4', userInput);
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


  export const ragStoreWebsite = createAsyncThunk(
    'character/ragStoreWebsite',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('https://customeravater.bestworks.cloud/rag-store-website',userInput);
        if (response?.status === 200) {
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

  export const chatWithCharacterAPI = createAsyncThunk(
    'character/chatWithCharacterAPI',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('https://customeravater.bestworks.cloud/chat2',userInput);
        console.log("response?.data?.status_code chat2==",response?.status)
        if (response?.status === 200) {
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

  export const characterList = createAsyncThunk(
    'character/characterList',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/list',userInput);
        console.log("response?.data?.status_code!==",response?.data?.status_code)
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



  export const getCharacterListInformationWithRespectId = createAsyncThunk(
    'character/getCharacterListInformationWithRespectId',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/list',userInput);
        console.log("response?.data?.status_code!==",response?.data?.status_code)
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


  export const getCreateCharacterList = createAsyncThunk(
    'character/getCreateCharacterList',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('character/list',userInput);
        console.log("response?.data?.status_code!==",response?.data?.status_code)
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

  export const getBackChatList = createAsyncThunk(
    'character/getBackChatList',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('character/chat-list',userInput);
        console.log("response?.data?.status_code!==",response?.data?.status_code)
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
    charList:[],
    charListInformation:[],
    createCharacterList:[]
   
  };



  const CreateCharacterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
},
    extraReducers: (builder) => {
      builder.addCase(createCharacterStepone.pending, (state) => {
             state.message = null;
             state.loading = true;
             state.error = null;
             }).addCase(createCharacterStepone.fulfilled, (state, { payload }) => {
              state.loading = false;
              state.message = payload;
             }).addCase(createCharacterStepone.rejected, (state, { payload }) => {
              state.loading = false;
              state.error = payload;
             }).addCase(createCharacterSteptwo.pending, (state) => {
               state.message = null;
               state.loading = true;
               state.error = null;
             }).addCase(createCharacterSteptwo.fulfilled, (state, { payload }) => {
               state.loading = false;
               state.message = payload;
              }).addCase(createCharacterSteptwo.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
              }).addCase(createCharacterStepthree.pending, (state) => {
                 state.message = null;
                 state.loading = true;
                 state.error = null;
              }).addCase(createCharacterStepthree.fulfilled, (state, { payload }) => {
                 state.loading = false;
                 state.message = payload;
              }).addCase(createCharacterStepthree.rejected, (state, { payload }) => {
                 state.loading = false;
                 state.error = payload;
             }).addCase(createCharacterStepfour.pending, (state) => {
                 state.message = null;
                 state.loading = true;
                 state.error = null;
             }).addCase(createCharacterStepfour.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.message = payload;
             }).addCase(createCharacterStepfour.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
             }).addCase(characterList.pending, (state) => {
                 state.message = null;
                 state.loading = true;
                 state.error = null;
             }).addCase(characterList.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.charList = payload;
                 state.error = false;
             }).addCase(characterList.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
             }).addCase(ragStoreWebsite.pending, (state) => {
                state.message = null;
                state.loading = true;
                state.error = null;
            }).addCase(ragStoreWebsite.fulfilled, (state, { payload }) => {
               state.loading = false;
              //  state.charList = payload;
               state.error = false;
            }).addCase(ragStoreWebsite.rejected, (state, { payload }) => {
               state.loading = false;
               state.error = payload;
           }).addCase(getCharacterListInformationWithRespectId.pending, (state) => {
              state.message = null;
              state.loading = true;
              state.error = null;
           }).addCase(getCharacterListInformationWithRespectId.fulfilled, (state, { payload }) => {
              state.loading = false;
               state.charListInformation = payload;
              state.error = false;
            }).addCase(getCharacterListInformationWithRespectId.rejected, (state, { payload }) => {
              state.loading = false;
            state.error = payload;
           }).addCase(getCreateCharacterList.pending, (state) => {
            state.message = null;
            state.loading = true;
            state.error = null;
         }).addCase(getCreateCharacterList.fulfilled, (state, { payload }) => {
            state.loading = false;
             state.createCharacterList = payload;
            state.error = false;
          }).addCase(getCreateCharacterList.rejected, (state, { payload }) => {
            state.loading = false;
          state.error = payload;
         }).addCase(chatWithCharacterAPI.pending, (state) => {
          state.message = null;
          state.loading = true;
          state.error = null;
       }).addCase(chatWithCharacterAPI.fulfilled, (state, { payload }) => {
          state.loading = false;
          //  state.createCharacterList = payload;
          state.error = false;
        }).addCase(chatWithCharacterAPI.rejected, (state, { payload }) => {
          state.loading = false;
        state.error = payload;
       }).addCase(getBackChatList.pending, (state) => {
           state.message = null;
           state.loading = true;
           state.error = null;
        }).addCase(getBackChatList.fulfilled, (state, { payload }) => {
           state.loading = false;
        //  state.createCharacterList = payload;
           state.error = false;
      }).addCase(getBackChatList.rejected, (state, { payload }) => {
           state.loading = false;
           state.error = payload;
     })

    },
  });
  export const {  } = CreateCharacterSlice.actions;
  
  export default CreateCharacterSlice.reducer;