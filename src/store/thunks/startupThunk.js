
import { createAsyncThunk } from '@reduxjs/toolkit';

import { profileServices } from '../../api/services';

export const startupThunk = createAsyncThunk(
    'app/startUp',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('gbToken');

            if (!token) {
                return rejectWithValue('No access token');
            }

            const [profile] = await Promise.all([
                profileServices.getInfoUser(token),
                
            ]);

            return {
                profile: profile,
                auth: {
                    token: token,
                    isChecking: false,
                    isAuthenticated: true,
                },
            };
        } catch (err) {
            return rejectWithValue(`Error in start up ${err}`);
        }

    }
);
