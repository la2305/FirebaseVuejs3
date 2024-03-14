<template>
  <div v-if="!isLoggedIn">
    <!-- login -->
    <template v-if="showLogin">
      <login-form @loggedIn="isLoggedIn = true"></login-form>
      <p>
        No account yet? <span @click="showLogin = false">Sign up</span> instead.
      </p>
    </template>

    <template v-else>
      <signup-form @loggedIn="isLoggedIn = true"></signup-form>
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> instead.
      </p>
    </template>
  </div>
  <div v-else>
    <h2>welcome {{ displayName }}</h2>
    <button @click="logOut">Sign Out</button>
  </div>
</template>

<script>
import SignupForm from "../src/components/SignupForm.vue";
import LoginForm from "./components/LoginForm.vue";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";

export default {
  components: { SignupForm, LoginForm },
  data() {
    return {
      isLoggedIn: false,
      showLogin: false,
      displayName: "",
    };
  },
  beforeUpdate() {
    if (auth.currentUser) {
      console.log(auth.currentUser);
      this.displayName = auth.currentUser.displayName;
    }
  },
  methods: {
    logOut() {
      signOut(auth).then(() => {
        console.log(this.displayName);
        this.isLoggedIn = false;
      });
    },
  },
};
</script>