import { useAuthStore } from "@stores/auth";
import { getCurrentUser } from "@services/auth";

const nonAuthRouteNames = ["LoginView", "RegisterView"];

export default async (to) => {
  const { isLoggedIn, setUser } = useAuthStore();

  if (!isLoggedIn.value) {
    const user = await getCurrentUser();
    setUser(user);
  }

  // is logged and navigating to sign in/up routes?
  if (isLoggedIn.value && nonAuthRouteNames.includes(to?.name)) {
    return { name: "DashboardView" };
  }

  // is not logged and navigating to auth required routes?
  if (to?.meta?.requiresAuth && !isLoggedIn.value) {
    return { name: "LoginView" };
  }
};
