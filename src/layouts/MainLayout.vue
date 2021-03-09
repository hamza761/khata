<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="text-center" style="font-weight: bold">
          Khata
        </q-toolbar-title>

        <div>
          <span @click="prompt = !prompt" class="text-h5 mdi mdi-plus"></span>
          <q-dialog v-model="prompt" persistent>
            <q-card class="addNew" style="min-width: 250px">
              <q-card-section>
                <div class="text-h6">Your address</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  dense
                  v-model="incomeDescription"
                  placeholder="Enter Income Source..."
                  autofocus
                />
                <q-input
                  dense
                  placeholder="Enter Income..."
                  v-model="incomeValue"
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add" @click="add()" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <div
          class="row  items-center"
          @click="changeTheme()"
          style="width: 100%; margin-left:20px;height: 40px"

        >
          <span class="mdi mdi-file-replace-outline text-h6 " style="margin-right:33px;"></span>
          Change Theme
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapFields } from "vuex-map-fields";
const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      incomeDescription: "",
      incomeValue: "",
      leftDrawerOpen: false,
      essentialLinks: linksData,
      prompt: false,
    };
  },
  methods: {
    changeTheme() {
      this.$store.commit("changeTheme");
    },
    add() {
      this.items.push({
        incomeDescription: this.incomeDescription,
        incomeValue: this.incomeValue,
      });
    },
  },
  computed: {
    ...mapFields(["items"]),
  },
};
</script>
