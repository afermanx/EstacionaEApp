import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBUJj7zSJW1d2r93EosrWI-dqkI5U4aa4M",
  authDomain: "dbestacione.firebaseapp.com",
  databaseURL: "https://dbestacione.firebaseio.com",
  projectId: "dbestacione",
  storageBucket: "dbestacione.appspot.com",
};

const api = initializeApp(firebaseConfig)

export default api