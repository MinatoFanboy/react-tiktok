import * as request from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const response = await request.get(`/users/suggested?page=${page}&per_page=${perPage}`);

        return response.data;
    } catch (error) {
        console.log('Error >>:', error);
    }
};
