import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllChinpokomon = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Chinpokomon.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleChinpokomon = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Chinpokomon/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createChinpokomon = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Chinpokomon.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteChinpokomon = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Chinpokomon/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateChinpokomon = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Chinpokomon/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllChinpokomon,
  createChinpokomon,
  getSingleChinpokomon,
  deleteChinpokomon,
  updateChinpokomon
}
