/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class YoutubeFakeClient {
  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }
}
