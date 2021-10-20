import { BASE_URL } from "./config"

export const profileServices = {
    getInfoUser: async (token) => {
        try {
            const response = await fetch(`${BASE_URL}/getInfoUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    token,
                },
            });


            const userData = await response.json();

            return userData;
            
        } catch (error) {
            throw new Error('error getInfoUser endpoint', error);

        }
    }
}