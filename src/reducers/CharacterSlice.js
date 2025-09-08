import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../stores/api';
import errorHandler from '../stores/errorHandler';

// Create Character | Mehtod: POST
export const createCharacter = createAsyncThunk(
  'createCharacter/create-character',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/create-characters', userInput, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response?.data?.status_code === 201) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Get Tags List | Mehtod: GET
export const getTagsList = createAsyncThunk(
  'createCharacter/tags-list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/user/tags');
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// // Get Characters List Before Login | Mehtod: GET
// export const fetchCharactersList = createAsyncThunk(
//   'characters/fetchCharactersList',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get('/user/characters');
//       if (response?.data?.status_code === 200) {
//         return response.data.data;
//       } else {
//         return rejectWithValue(response.data);
//       }
//     } catch (err) {
//       let errors = errorHandler(err);
//       return rejectWithValue(errors);
//     }
//   }
// );
export const fetchCharactersList = createAsyncThunk(
  'characters/fetchCharactersList',
  async (pageDetails, { rejectWithValue }) => {
    const { page } = pageDetails;
    try {
      let url = `/user/characters/?page=${page}`;
      const response = await api.get(url);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Paid Character api call start here
export const fetchPaidCharactersList = createAsyncThunk(
  'characters/fetchPaidCharactersList',
  async (pageDetails, { rejectWithValue }) => {
    const { page } = pageDetails;
    try {
      let url = `/user/characters-paid/?page=${page}`;
      const response = await api.get(url);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);
// Paid Character api call ends here

// Get Characters List After Login | Mehtod: GET
// export const fetchCharactersListAfterLogin = createAsyncThunk(
//   'characters/fetchCharactersListAfterLogin',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get('user/user-characters');
//       if (response?.data?.status_code === 200) {
//         return response.data.data;
//       } else {
//         return rejectWithValue(response.data);
//       }
//     } catch (err) {
//       let errors = errorHandler(err);
//       return rejectWithValue(errors);
//     }
//   }
// );

export const fetchCharactersListAfterLogin = createAsyncThunk(
  'characters/fetch-characters-list-after-login',
  async (pageDetails, { rejectWithValue }) => {
    const { page } = pageDetails;
    try {
      let url = `/user/user-characters/?page=${page}`;
      const response = await api.get(url);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Get Paid Characters List After Login by user | Method: GET
export const fetchTopCharactersListAfterLogin = createAsyncThunk(
  'characters/fetch-paid-characters-list-after-login',
  async (pageDetails, { rejectWithValue }) => {
    const { page } = pageDetails;
    try {
      let url = `/user/user-paid-characters/?page=${page}`;
      const response = await api.get(url);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);


// Get Characters List by user | Method: GET
export const fetchCharactersListByUser = createAsyncThunk(
  'characters/fetchCharactersListByUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/user/characters-by-users');
      if (response?.data?.status_code === 200) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Get Characters Details by User | Method: GET
export const fetchCharactersDetailsById = createAsyncThunk(
  'characters/fetchCharactersDetailsById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`user/characters_edit/${id}`);
      if (response?.data?.status_code === 200) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Get Character Details | Mehtod: GET
export const getCharacterById = createAsyncThunk(
  'characters/get-character-by-id',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/user/characters_edit/${id}`);
      if (response?.data?.status_code === 200) {
        return response?.data?.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Character Update | Mehtod: POST
export const updateCharacter = createAsyncThunk(
  'characters/updateCharacter',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await api.post(`user/characters_update`, formData);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Character Search | Mehtod: POST
export const searchCharacter = createAsyncThunk(
  'character/character-search',
  async (searchInput, { rejectWithValue }) => {
    try {
      const { tag, entity, gender, page } = searchInput;
      const response = await api.post(`user/character-search/?page=${page}`, {
        tag,
        entity, //search
        gender,
      });
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Character Search After Login | Mehtod: POST
export const searchCharacterAfterLogin = createAsyncThunk(
  'character/character-search-after-login',
  async (searchInput, { rejectWithValue }) => {
    try {
      const { tag, entity, gender,page } = searchInput;
      const response = await api.post(`user/character-search-user/?page=${page}`, {
        tag,
        entity, //search
        gender,
      });
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Character Sorting | Mehtod: POST
export const sortCharacter = createAsyncThunk(
  'character/character-sort',
  async (searchInput, { rejectWithValue }) => {
    try {
      const { tag, entity, gender,page,sortTag } = searchInput;
      const response = await api.post(
        `user/character-search-by-trending/?page=${page}`,
        {
          entity: sortTag,
        }
      );
      console.log(response,"response");
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

export const sortCharacterAfterLogin = createAsyncThunk(
  'character/character-sort-user',
  async (searchInput, { rejectWithValue }) => {
    try {
      const { tag, entity, gender,page,sortTag } = searchInput;
      const response = await api.post(
        `user/character-search-by-trending-user/?page=${page}`,
        {
          entity: sortTag,
        }
      );
      console.log(response,"response");
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);


// ChatBot | Mehtod: POST
export const sendMessage = createAsyncThunk(
  'sendMessage/send-message',
  async (userInput, { rejectWithValue }) => {
    try {
      const { id, user_input, name } = userInput;
      const response = await api.post('user/character-chats', {
        id,
        user_input,
        name,
      });
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Chat History | Mehtod: POST
export const chatHistory = createAsyncThunk(
  'chat/chat-history',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.post('user/characters/chat/users/history', {
        char_id: id,
      });
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

// Popularity | Method: POST
export const popularity = createAsyncThunk(
  'character/popularity',
  async (charId, { rejectWithValue }) => {
    try {
      const response = await api.post('user/popularity', { char_id: charId });
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

const initialState = {
  message: null,
  error: null,
  isLoading: false,
  characterList: [],
  totalPage: null,
  totalCharacters: null,
  perPage: null,
  
  paidCharacterList:[],
  paidUserCharacterList:[],

  userCharacterList: [],
  response: null,
  currentTimeStamp: null,
  history: null,
  isHistoryChatLoding: false,
  characterDetails: [],
  tags: [],
  selectedTags: [],
  isPaymentRequired: null,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    clearFormData: (state) => {
      state.characterDetails = {};
    },
    setSelectedTagsList: (state, action) => {
      state.selectedTags = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCharacter.pending, (state) => {
        state.isLoading = true;
        state.isPaymentRequired = false;
      })
      .addCase(createCharacter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.currentUser = payload;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(createCharacter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
        state.isPaymentRequired =
          payload !== undefined && payload.statusCode === 402 ? true : false;
      })

      .addCase(getTagsList.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(getTagsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tags = payload.data;
      })
      .addCase(getTagsList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(fetchCharactersList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharactersList.fulfilled, (state, { payload }) => {
        const { data, per_page, total_characters, total_page } = payload;
        state.characterList = data;
        state.totalPage = total_page;
        state.totalCharacters = total_characters;
        state.perPage = per_page;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchCharactersList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      // Paid Characters Section start here
      .addCase(fetchPaidCharactersList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPaidCharactersList.fulfilled, (state, { payload }) => {
        const { data, per_page, total_characters, total_page } = payload;
        state.paidCharacterList = data;
        state.totalPage = total_page;
        state.totalCharacters = total_characters;
        state.perPage = per_page;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchPaidCharactersList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      // Paid Characters Section ends here

      // Paid Characters List After Login start here 
      .addCase(fetchTopCharactersListAfterLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchTopCharactersListAfterLogin.fulfilled,
        (state, { payload }) => {
          const { data, per_page, total_characters, total_page } = payload;
          state.paidCharacterList = data;
          state.totalPage = total_page;
          state.totalCharacters = total_characters;
          state.perPage = per_page;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchTopCharactersListAfterLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      // Paid Characters List After Login ends here

      .addCase(fetchCharactersListAfterLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCharactersListAfterLogin.fulfilled,
        (state, { payload }) => {
          const { data, per_page, total_characters, total_page } = payload;
          state.characterList = data;
          state.totalPage = total_page;
          state.totalCharacters = total_characters;
          state.perPage = per_page;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchCharactersListAfterLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(fetchCharactersListByUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharactersListByUser.fulfilled, (state, { payload }) => {
        state.userCharacterList = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchCharactersListByUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(fetchCharactersDetailsById.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCharactersDetailsById.fulfilled, (state, { payload }) => {
        const { id } = payload[0];
        state.characterDetails = {
          id: id,
          details: payload[0],
        };
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchCharactersDetailsById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(getCharacterById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCharacterById.fulfilled, (state, { payload }) => {
        const { character_photo, name } = payload[0];
        state.isLoading = false;
        state.error = false;
        state.characterDetails = {
          name: name,
          photo: character_photo,
          details: payload[0],
        };
      })
      .addCase(getCharacterById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(searchCharacter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchCharacter.fulfilled, (state, { payload }) => {
        state.characterList = payload.data;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(searchCharacter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(searchCharacterAfterLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchCharacterAfterLogin.fulfilled, (state, { payload }) => {
        state.characterList = payload.data;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(searchCharacterAfterLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(updateCharacter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCharacter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(updateCharacter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isPaymentRequired = false;
        state.message = null;
      })
      .addCase(sendMessage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.response = payload.message;
        state.currentTimeStamp = new Date().toISOString();
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(sendMessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
        state.isPaymentRequired =
          payload !== undefined && payload.statusCode === 402 ? true : false;
      })

      .addCase(chatHistory.pending, (state) => {
        state.isLoading = true;
        state.isHistoryChatLoding = true;
        state.error = null;
      })
      .addCase(chatHistory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.history = payload?.data;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';

        state.isHistoryChatLoding = false;
      })
      .addCase(chatHistory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isHistoryChatLoding = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(sortCharacter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sortCharacter.fulfilled, (state, { payload }) => {
        state.characterList = payload.data;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(sortCharacter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(sortCharacterAfterLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sortCharacterAfterLogin.fulfilled, (state, { payload }) => {
        state.characterList = payload.data;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(sortCharacterAfterLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(popularity.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(popularity.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(popularity.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      });
  },
});
export const { clearFormData, setSelectedTagsList } = characterSlice.actions;

export default characterSlice.reducer;
