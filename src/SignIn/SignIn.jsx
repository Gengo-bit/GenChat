import React from 'react'
import { auth, firebase } from '../FirebaseConfig/FirebaseConfig';

function SignIn() {
    
    const signInWithGoogle = async () => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        console.log("User signed in successfully");
      } catch (error) {
        console.error("Error during sign-in:", error.message);
      }
    };
  
    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    );
}
  

export default SignIn;
