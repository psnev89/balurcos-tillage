<script setup>
import { useAuthStore } from "@stores/auth.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

// form
const email = ref("");
const name = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();
const { register } = useAuthStore();

const handleRegister = async () => {
  error.value = null;

  try {
    await register({
      email: email.value,
      password: password.value,
      name: name.value,
    });
    router.replace({ name: "DashboardView" });
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<template>
  <div>
    <h1>Register</h1>
    <div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <form action="#" @submit.prevent="handleRegister">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="name" type="text" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="password" type="password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>
