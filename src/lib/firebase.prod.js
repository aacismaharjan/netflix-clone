import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBHCoZyaJqpqWmfIpAGiaDZlbufHQVV4ok',
  authDomain: 'netflix-8b418.firebaseapp.com',
  projectId: 'netflix-8b418',
  storageBucket: 'netflix-8b418.appspot.com',
  messagingSenderId: '397013924576',
  appId: '1:397013924576:web:a9f3bd53ee381b93242e85',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
