import axios from 'axios';

export default class YoutubeFake {
  // constructor() { }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopuar();
  }

  // eslint-disable-next-line class-methods-use-this
  async #searchByKeyword() {
    return axios
      .get('/videos/search.json')
      .then((res) => res.data.items)
      .then((itmes) => itmes.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // eslint-disable-next-line class-methods-use-this
  async #mostPopuar() {
    return axios
      .get('/videos/popular.json')
      .then((res) => res.data.items);
  }
}
