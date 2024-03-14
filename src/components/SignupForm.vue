<template>
  <form @submit.prevent="signUp">
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" required v-model="username" />
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default {
  emits: ["loggedIn"],
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        // login
        .then((credential) => {
          console.log(credential.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
      // update error
      // createUserWithEmailAndPassword(auth, this.email, this.password).then(
      //   () => {
      //     updateProfile(auth.currentUser, {
      //       displayName: this.username,
      //     }).then(() => {
      //       console.log(auth.currentUser.displayName);
      //     });
      //   }
      // );

      // bay qua login
      // .then(() => {
      //   // update displayname
      //   updateProfile(auth.currentUser, {
      //     displayName: this.username,
      //   }).then(() => {
      //     this.$emit("loggedIn");
      //   });
      // });
    },
  },
};
</script>