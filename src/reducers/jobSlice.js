import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON'); // Replace with your actual API
  const data = await response.json();
  return data.jdList; // Assuming "jdList" is the key in your response
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
