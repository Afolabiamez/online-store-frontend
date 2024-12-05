import axiosInstance from './axiosConfig';

export const fetchProducts = async () => {
    try {
        const response = await axiosInstance.get('/productRoutes');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
