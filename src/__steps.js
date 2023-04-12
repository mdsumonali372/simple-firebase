/**
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config )
 * 4. insta firebase: npm install firebase
 * 5. Danger: Do not share firebase config file\
 * 6. visit: go to docs > build > authentication > web > get started
 * 7. export app from to firebase.config.js file export default
 * 8. Login.jsx: import { getAuth } from "firebase/auth";
 * 9. create  const auth = getAuth(app);
 * 10. import { GoogleAuthProvider } from "firebase/auth"; create const provider = new GoogleAuthProvider();
 * 11. use signInWithPopup(auth, provider)
 * 13. activate google sing-in method (facebook, google, github, twitter)
 * */
