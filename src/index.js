import axios from "axios";
axios.defaults.headers.common["x-api-key"] = APP_KEY;
import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#selectElement'
})

import Notiflix from 'notiflix';

const APP_KEY = 'live_Y3FsvdLHpZ4MPf7m5KM8JqgazLjkUFjnmGNwb1q4FCrVjSI3cgy8n0sevehaw5sF';
const API_URL = 'https://api.thecatapi.com/v1/breeds';
