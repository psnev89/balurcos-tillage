import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

// plugins
pinia.use(piniaPluginPersistedstate);

export default pinia;
