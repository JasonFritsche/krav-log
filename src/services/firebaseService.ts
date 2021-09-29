// import the firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// config data from your firebase dashboard
const CONFIG = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
}

// Register user
export async function register(
  username: string,
  email: string,
  password: string
) {
  try {
    // create user using the email and password
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    // update the user to add his username
    await response?.user?.updateProfile({
      displayName: username
    })
    return response.user
  } catch (error) {
    // alert any error that occurred in the process
    alert(error)
  }
}

// Login user
export async function login(email: string, password: string) {
  try {
    // log in using email and password
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    // return the currently logged in user.
    return response.user
  } catch (error) {
    alert(error)
  }
}

// initalize firebase
export const firebaseInit = function () {
  firebase.initializeApp(CONFIG)
}
