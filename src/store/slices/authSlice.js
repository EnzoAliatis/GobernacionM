import { createSlice } from '@reduxjs/toolkit';

// import { startupThunk } from '../thunks/startupThunk';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isChecking: true,
        isAuthenticated: false,
    },
    reducers: {
        setCredentials: (state, { payload }) => ({
            ...state,
            token: payload,
        }),
        setIsChecking: (state => ({
            ...state,
            isChecking: true,
        })),
        removeCredentials: state => {
            state.token = null;
            state.isChecking = false;
            state.isAuthenticated = false;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(startupThunk.fulfilled, (state, { payload }) => ({
    //         ...state,
    //         ...payload.auth,
    //     }));
    //     builder.addCase(startupThunk.rejected, (state, { payload }) => ({
    //         ...state,
    //         token: null,
    //         isChecking: false,
    //         isAuthenticated: false,
    //     }));
    // },
});

export const { setCredentials, setIsChecking, removeCredentials } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth;
