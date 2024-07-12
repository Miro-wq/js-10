import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': 'live_JPoam0RZFEIr8eokKzekS7HIt2LK2OoKkz2bJPYRJWgTaSAikbGrqGNxJ3OzQNJl',
  },
});

// const instance = axios.create({
//         baseURL: 'https://api.example.com'
//     });

// const axiosInstance = axios.create({
//     baseURL: `${BASE_URL}`,
//     headers: {
//     "Access-Control-Allow-Origin": "*",
//    },

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


//==========================DRAFTS============================
// new SlimSelect({
//     select: '#selectElement',
  
//     // Array of Option objects
//     data: [{ text: 'Value 1', value: 'value1' }],
  
//     // or
  
//     // Array of Optgroups and/or Options
//     data: [{ label: 'Optgroup Label', options: { text: 'Value 1', value: 'value1' } }],
//   })