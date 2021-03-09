<template>
  <div id="q-app" :class="{ themedark: dTheme, themelight: !dTheme }">
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState(["dTheme"]),
  },
};
</script>
<style>

</style>
<style lang="">
 
</style>