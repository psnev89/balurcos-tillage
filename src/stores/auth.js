import { ref, computed } from "vue";
import { registerUser, loginUser, logoutUser } from "@/services/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    // state
    const userData = ref(null);

    // getters
    const user = computed(() => userData.value);
    const isLoggedIn = computed(() => userData.value != null);

    // actions
    const setUser = (user) => {
      userData.value = user;
    };

    const register = async ({ email, password, name }) => {
      const user = await registerUser({ email, password, name });
      setUser(user);
    };

    const login = async ({ email, password }) => {
      const user = await loginUser({ email, password });
      setUser(user);
    };

    const logout = async () => {
      await logoutUser();
      setUser(null);
    };

    return { user, setUser, isLoggedIn, register, login, logout };
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ["userData"],
    },
  }
);
