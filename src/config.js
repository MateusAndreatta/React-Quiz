import firebase from 'firebase'
import Rebase from 're-base'

var firebaseInfo = firebase.initializeApp({
    apiKey: "AIzaSyBqIrdcYhzO8-_W-badwQGXC_O5hZACcW8",
    authDomain: "quizreact.firebaseapp.com",
    databaseURL: "https://quizreact.firebaseio.com",
    projectId: "quizreact",
    storageBucket: "quizreact.appspot.com",
    messagingSenderId: "706298678236"
});
const db = firebase.database(firebaseInfo)
const config = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider,
    'twitter': new firebase.auth.TwitterAuthProvider()
}

export const auth = firebaseInfo.auth()
export default config