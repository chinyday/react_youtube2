/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class YoutubeFakeClient {
  async search({ params }) {
    return params.relatedToVideoId ? axios.get('/videos/related.json') : axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
