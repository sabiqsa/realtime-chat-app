import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAhErwIH-Zk3LjLnWvkcsXBIJM5KLSjyY4",
    authDomain: "chat-unichat.firebaseapp.com",
    projectId: "chat-unichat",
    storageBucket: "chat-unichat.appspot.com",
    messagingSenderId: "199395076189",
    appId: "1:199395076189:web:154b310e851192703405b4",
  })
  .auth();
