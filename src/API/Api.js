const API_KEY = 'kcjowtd4k3cqMxiobla4a1UC9XyIsLLpwFRm6kDRf0E'; // здесь нужно вставить свой ключ с https://unsplash.com/ после регистрации

class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(query) {
    return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`
      }
    })
    .then(res => res.json());
  }
}

const api = new Api({
  baseUrl: 'https://api.unsplash.com/',
  apiKey: API_KEY
});

export default api;
