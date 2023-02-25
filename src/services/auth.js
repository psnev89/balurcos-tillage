import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "@/config/firebase.js";

// register user
export const registerUser = ({ email, password, name }) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response?.user) {
          updateProfile({ displayName: name });
          resolve(response.user);
        } else {
          reject(Error("Unable to register user"));
        }
      })
      .catch((err) => reject(err));
  });
};

// login user
export const loginUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response?.user) {
          resolve(response.user);
        } else {
          reject(Error("Login failed"));
        }
      })
      .catch((err) => reject(err));
  });
};

// logout user
export const logoutUser = async () => {
  await signOut();
};

// get current user (from https://github.com/firebase/firebase-js-sdk/issues/462)
export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const currentUser = auth.currentUser;
    if (currentUser) resolve(currentUser);
    else {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    }
  });
};
