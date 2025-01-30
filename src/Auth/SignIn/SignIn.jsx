import React from 'react'
import './SignIn.css'
import { auth, firebase, firestore } from '../../FirebaseConfig';

function SignIn() {
    
    const signInWithGoogle = async () => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);

        // Get user info from result
        const user = result.user;
        const {
          uid,
          displayName,
          photoURL,
          email,
          emailVerified,
          phoneNumber,
          providerId,
          isAnonymous,
          metadata,
          refreshToken,
        } = user;

        // Create a user object with all available data
        const userData = {
          uid,
          displayName: displayName || '',
          photoURL: photoURL || '',
          email: email || '',
          emailVerified: emailVerified || false,
          phoneNumber: phoneNumber || '',
          providerId: providerId || '',
          isAnonymous: isAnonymous || false,
          creationTime: metadata.creationTime || '',
          lastSignInTime: metadata.lastSignInTime || '',
          refreshToken: refreshToken || '',
        };

        // Check if the user already exists in Firestore
        const userRef = firestore.collection('users').doc(uid);
        const doc = await userRef.get();

        if (!doc.exists) {
          // If user doesn't exist in Firestore, create a new document for the user
          await userRef.set(userData);
          console.log("User document created in Firestore.");
        } else {
          console.log("User document already exists.");
        }

        console.log("User signed in successfully");
      } catch (error) {
        console.error("Error during sign-in:", error.message);
      }
    };
  
    return (
      <button onClick={signInWithGoogle} className="sign-in-button">
        Sign in with Google
        </button>
    );
}
  

export default SignIn;
