
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { services } from '../../io/services/apiServices';
import StoredValues, { STORAGE_AUTHORIZATION_KEY } from '../../io/storage/Storage';

export const startupThunk = createAsyncThunk(
    'app/startUp',
    async (_, { rejectWithValue }) => {
        try {
            const token = await AsyncStorage.getItem(STORAGE_AUTHORIZATION_KEY);

            if (token) {
                await StoredValues.setAuthorizationToken(token);
            } else {
                return rejectWithValue('No access token');
            }

            const [profile, programs, programRecommended, infoEducation] = await Promise.all([
                services.getProfileService(),
                services.programsService(),
                services.recommendedProgramService(),
                services.getInfoEducationalService(),
            ]);

            return {
                profile: profile.profile,
                programs: programs.programs,
                programIdRecommendation: programRecommended.body.data.id,
                infoEducation: infoEducation.data.data,
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
