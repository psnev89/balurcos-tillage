<script setup>
import { useAuthStore } from "@stores/auth.js";
import { useRouter } from "vue-router";

const { logout } = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  try {
    await logout();
    router.replace({ name: "LoginView" });
  } catch (err) {
    console.error(err.message);
  }
};
</script>

<template>
  <div>
    <h1>Dashboard View</h1>
    <div>
      <button @click="handleLogout">Logout</button>
    </div>
  </div>
</template>
