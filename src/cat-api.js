import axios from 'axios';
import Notiflix from 'notiflix';

const USER_KEY = `live_Y3FsvdLHpZ4MPf7m5KM8JqgazLjkUFjnmGNwb1q4FCrVjSI3cgy8n0sevehaw5sF`;
const API_URL = `https://api.thecatapi.com/v1/breeds`;

export function fetchBreeds() {
    return axios.get(API_URL, {
      headers: {
        'x-api-key': USER_KEY,
      },
    })
      .then(response => response.data)
      .then(data => {
        return data.map(({ id, name }) => ({
          value: id,
          label: name,
        }));
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!',{
          clickToClose: false,
          timeout: 1000,
        });
        return [];
      });
  }
  
export function fetchCatByBreed(breedId) {
    return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${USER_KEY}`)
    .then(response => response.data)
    .then(([cat]) => {
        return cat;
})
    .catch(error => {
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!',{
      clickToClose: false,
      timeout: 1000,
    });
      return [];
      });
}
  
  