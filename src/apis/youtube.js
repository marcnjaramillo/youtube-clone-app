import axios from 'axios';

const KEY = 'AIzaSyBYTt9rm12Z324U7sJI7OiI_08V8oppQbA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});