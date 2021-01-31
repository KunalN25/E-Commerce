import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'



// const firebaseApp = firebase.initializeApp({
//     apiKey:process.env.REACT_AUTH_apiKey,//process.env.REACT_AUTH_apiKey,
//     authDomain:process.env.REACT_AUTH_authDomain, 
//     projectId:process.env.REACT_AUTH_projectId, 
//     storageBucket:process.env.REACT_AUTH_storageBucket,
//     messagingSenderId:process.env.REACT_AUTH_messagingSenderId,
//     appId:process.env.REACT_AUTH_appId,
// })

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBUML7RPrs5k_USUQGa5S2a_Jb50-kEZY",
    authDomain: "electron-5e6b1.firebaseapp.com",
    databaseURL: "https://electron-5e6b1-default-rtdb.firebaseio.com",
    projectId: "electron-5e6b1",
    storageBucket: "electron-5e6b1.appspot.com",
    messagingSenderId: "2449785722",
    appId: "1:2449785722:web:2a4b5a0af067720a808cc3"
})
// export const auth = firebaseApp.auth()
export const db=firebaseApp.firestore()

export default firebaseApp 