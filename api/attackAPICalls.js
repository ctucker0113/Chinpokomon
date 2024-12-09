import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllAttacks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Attacks.json`, {
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
 
const getSingleAttack = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Attacks/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createAttack = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Attacks.json`, {
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

const deleteAttack = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Attacks/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateAttack = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Attacks/${payload.firebaseKey}.json`, {
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
  getAllAttacks,
  createAttack,
  getSingleAttack,
  deleteAttack,
  updateAttack
}
