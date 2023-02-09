export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopuar();
  }

  async relatedVideos(id) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video',
        maxResults: 25,
      },
    }).then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async channelDetial(id) {
    return this.apiClient.channels({
      params: {
        part: 'snippet',
        id,
      },
    }).then((res) => res.data.items[0].snippet);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    }).then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopuar() {
    return this.apiClient.videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      },
    }).then((res) => res.data.items);
  }
}
