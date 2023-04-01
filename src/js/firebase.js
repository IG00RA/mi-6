// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBO7SpBK6g9LFu67umoL4GqFeHQCfXTVvQ',
  authDomain: 'web-studioauth.firebaseapp.com',
  projectId: 'web-studioauth',
  storageBucket: 'web-studioauth.appspot.com',
  messagingSenderId: '944296796773',
  appId: '1:944296796773:web:a670ff3170ff6f63b35c8c',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const googleLogin = document.getElementById('googleLogin');
const form = document.getElementById('auth_form');

googleLogin.addEventListener('click', e => {
  // signInWithRedirect(auth, provider);

  // redirect the result
  //  getRedirectResult(auth)
  //    .then((result) => {
  //      // This gives you a Google Access Token. You can use it to access Google APIs.
  //      const credential = GoogleAuthProvider.credentialFromResult(result);
  //      const token = credential.accessToken;

  //      // The signed-in user info.
  //      const user = result.user;

  //    }).catch((error) => {
  //      // Handle Errors here.
  //      const errorCode = error.code;
  //      const errorMessage = error.message;
  //      // The email of the user's account used.
  //      const email = error.email;
  //      // The AuthCredential type that was used.
  //      const credential = GoogleAuthProvider.credentialFromError(error);
  //      // ...

  // });

  // sign in with popup tab
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      form.innerHTML = `<img src="${user.photoURL}" style="width:10%">
          <p>Name: ${user.displayName}</p>
          <p>Email: ${user.email}</p>`;
      console.log(user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      alert(errorMessage);
    });
});

// signOut.addEventListener('click', e => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch(error => {
//       // An error happened.
//     });
// });
