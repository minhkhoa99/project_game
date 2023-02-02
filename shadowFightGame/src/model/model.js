
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import { renderErrorMessage } from "../view/view";
import { setActivesScreen } from "../view/view";
import { alertSuccess } from "../view/view";
import { wrongAlert } from "../view/view";
import { loading } from "../view/view";

export let authUser = {};
export let createNewUser = (
  firstname,
  lastname,
  email,
  password,
  passwordagain
) => {
  loading("block");
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);

      renderErrorMessage("server_success_message", "SIGN UP SUCCESS");
      renderErrorMessage("server_err_message", "");
      loading("none");
      return alertSuccess("SIGN UP SUCCESSFUL PLEASE CHECK VERYFY EMAIL");
    })
    .then(() => {
      return sendEmailVerification(auth.currentUser);
    })
    .then(() => {
      setActivesScreen("loginPage");
    })
    .catch((err) => {
      loading("none");
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server_err_message", errorMessage);
      renderErrorMessage("server_success_message", "");
    });
};
export let createNewUser123 = (email, password) => {
  loading("block");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      authUser.email = user.email;
      authUser.displayname = user.displayName;
      // ...
      // renderErrorMessage("loginSuccess", "SIGN IN SUCCESS");
      renderErrorMessage("sign1", "");
    })
    .then(() => {
      loading("none");
      return alertSuccess("SIGN IN SUCCESS");
    })
    .then(() => {
      setActivesScreen("chat");
    })
    .catch((error) => {
      loading("none");
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("sign1", errorMessage);
      renderErrorMessage("loginSuccess", "");
    });
};

export let resetpass = (email) => {
  loading("block");
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      loading("none");
      return alertSuccess("Check for email =))");

      // ..
    })
    .catch((error) => {
      loading("none");
      const errorCode = error.code;
      const errorMessage = error.message;
      return wrongAlert();
      // ..
    });
};



export function player1() {
    let player1 = document.getElementById("p1");
    if (player1.style.display == "none") {
      player1.style.display = "block";
    } else {
      player1.style.display = "none";
    }
  }
export  function player2() {
    let player2 = document.getElementById("p2");
    if (player2.style.display == "none") {
      player2.style.display = "block";
    } else {
      player2.style.display = "none";
    }
  }
