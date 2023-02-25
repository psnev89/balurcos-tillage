<script setup>
import { useAuthStore } from "@stores/auth.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

// form
const email = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();
const { login } = useAuthStore();

const handleLogin = async () => {
  error.value = null;

  try {
    await login({
      email: email.value,
      password: password.value,
    });
    router.replace({ name: "DashboardView" });
  } catch (err) {
    err.value = err.message;
  }
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <form action="#" @submit.prevent="handleLogin">
        <div>
          <label for="email"></label>
          <input id="email" v-model="email" type="email" />
        </div>
        <div>
          <label for="password"></label>
          <input id="password" v-model="password" type="text" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
