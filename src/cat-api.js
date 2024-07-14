import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key':
      'live_JPoam0RZFEIr8eokKzekS7HIt2LK2OoKkz2bJPYRJWgTaSAikbGrqGNxJ3OzQNJl',
  },
  withCredentials: false, // pt un favicon
});

async function fetchBreeds() {
  try {
    const response = await axiosInstance.get('/breeds');
    return response.data;
  } catch (error) {
    throw new Error(`error: ${error.message}`);
  }
}

async function fetchCatByBreed(breedId) {
  try {
    const response = await axiosInstance.get('/images/search', {
      params: { breed_ids: breedId },
    });
    return response.data;
  } catch (error) {
    throw new Error(`error: ${error.message}`);
  }
}

export { fetchBreeds, fetchCatByBreed };
