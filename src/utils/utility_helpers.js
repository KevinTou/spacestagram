import axios from 'axios';

const BASE_URL_WITH_API_KEY = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

export function fetchImagesWithDemoKey() {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
}

export function fetchImage() {
  return axios.get(BASE_URL_WITH_API_KEY);
}

export function fetchImagesWithDate(starting_date = '', ending_date = '') {
  if (starting_date && ending_date) {
    return axios.get(
      `${BASE_URL_WITH_API_KEY}&starting_date=${starting_date}&ending_date=${ending_date}`,
    );
  } else if (starting_date) {
    return axios.get(`${BASE_URL_WITH_API_KEY}&starting_date=${starting_date}`);
  }

  return axios.get(BASE_URL_WITH_API_KEY);
}
