import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js'
import Notiflix from 'notiflix';

const loader = document.querySelector('.loader');
const error = document.querySelector('.error')
const breedSelect = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info')



function catSelectList(breeds) {
    breeds.forEach(({ value, label }) => {
      breedSelect.insertAdjacentHTML(
        'beforeend',
        `<option value="${value}">${label}</option>`,

      );
    });
    loader.classList.add('hidden')

    new SlimSelect({
      select: breedSelect,
    });
    
  }
breedSelect.addEventListener('change', selectedBreed)
fetchBreeds()
    .then(breeds => {
      catSelectList(breeds);
    });

function selectedBreed() {
    const selectedBreedId = breedSelect.value
    fetchCatByBreed(selectedBreedId)
    .then(cat => {
      renderCatCard(cat)
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!',{
          clickToClose: false,
          timeout: 3000,
        });
      });
      loader.classList.remove('hidden')
    }
function renderCatCard(cat) {
  console.log(fetchCatByBreed());
  catCard.innerHTML = `
  <div class="cat-card">
    <img src="${cat.url}" alt="${cat.breeds[0].name}">
    <div class="description">
    <h2>${cat.breeds[0].name}</h2>
    <p>${cat.breeds[0].description}</p>
    <p>From:&emsp;${cat.breeds[0].origin}</p>

    <p>Temperament:&emsp;${cat.breeds[0].temperament}</p>
    <p>Weight:&emsp;${cat.breeds[0].weight.metric}</p>
    </div>
  </div>`
loader.classList.add('hidden')

}
    