import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  child,
  get,
  push,
  ref,
  remove,
  update,
} from 'firebase/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyDZiIMbcPW2ocXiUbmIKlPzuwyeH0iYVgY',
  authDomain: 'storerpm-35ffd.firebaseapp.com',
  databaseURL: 'https://storerpm-35ffd-default-rtdb.firebaseio.com/',
  projectId: 'storerpm-35ffd',
  storageBucket: 'storerpm-35ffd.appspot.com',
  messagingSenderId: '3095020087',
  appId: '1:3095020087:web:6240f2cd8c6bfd317e35b2',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

export function addPW(userId, name, url, username, password, notes) {
  const passwordData = {
    type: 'pw',
    name: name,
    url: url,
    username: username,
    password: password,
    notes: notes,
  };
  push(ref(db, `/${userId}/`), passwordData);
}

export function addCC(userId, name, number, expiration, cvc, notes) {
  const creditCardData = {
    type: 'cc',
    name: name,
    number: number,
    expiration: expiration,
    cvc: cvc,
    notes: notes,
  };
  push(ref(db, `/${userId}/`), creditCardData);
}

export function getItems(userId) {
  let passwords = get(child(dbRef, `/${userId}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
        return {};
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return passwords;
}

export function deleteItem(userId, key) {
  remove(child(dbRef, `/${userId}/` + key));
}

export function updatePW(userId, key, name, url, username, password, notes) {
  const passwordData = {
    type: 'pw',
    name: name,
    url: url,
    username: username,
    password: password,
    notes: notes,
  };
  const updates = {};
  updates[`/${userId}/` + key] = passwordData;
  return update(dbRef, updates);
}

export function updateCC(userId, key, name, number, expiration, cvc, notes) {
  const creditCardData = {
    type: 'cc',
    name: name,
    number: number,
    expiration: expiration,
    cvc: cvc,
    notes: notes,
  };
  const updates = {};
  updates[`/${userId}/` + key] = creditCardData;
  return update(dbRef, updates);
}
