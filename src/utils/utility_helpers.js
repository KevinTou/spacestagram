import axios from 'axios';

const BASE_URL_WITH_API_KEY = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

export function fetchImagesWithDemoKey() {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
}

export function fetchImage() {
  return axios.get(BASE_URL_WITH_API_KEY);
}

export function fetchImagesWithDate(start_date = '', end_date = '') {
  if (start_date && end_date) {
    return axios.get(
      `${BASE_URL_WITH_API_KEY}&start_date=${start_date}&end_date=${end_date}`,
    );
  } else if (start_date) {
    return axios.get(`${BASE_URL_WITH_API_KEY}&start_date=${start_date}`);
  }

  return axios.get(BASE_URL_WITH_API_KEY);
}
