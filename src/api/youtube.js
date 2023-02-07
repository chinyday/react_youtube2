/* eslint class-methods-use-this: "error" */
/* eslint-env es6 */
import axios from 'axios';

export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res) => res.data.items);
}
