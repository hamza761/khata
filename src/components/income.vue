<template>
  <div>
    <row-comp :items="items" />
    <q-dialog v-model="prompt" persistent>
      <q-card class="addNew" style="min-width: 250px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="incomeDescriptionChild"
            placeholder="Enter Income Source..."
            autofocus
          />
          <q-input
            dense
            placeholder="Enter Income..."
            v-model="incomeValueChild"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add" @click="addChild()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import RowComp from "./rowComp.vue";
export default {
  components: {
    RowComp,
  },
  data() {
    return {
      incomeDescriptionChild: "",
      incomeValueChild: "",
      prompt: false,
      depth: 1,
      currentLoadedItem: null,
    };
  },
  computed: {
    ...mapFields(["items"]),
  },
  methods: {
    addChild() {
      console.log(this.currentLoadedItem);
      var id = this.currentLoadedItem.id;
      var d = id.split("."); /// d = [1,1]
      var j = this.items;
      for (var i in d) {
        j[d[i]]
      }
      // this.items.children
      //   .push({
      //     incomeDescription: this.incomeDescriptionChild,
      //     incomeValue: this.incomeValueChild,
      //   })
      //   .then((result) => {
      //     console.log("called");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$root.$on("addCalled", (e) => {
        console.log(e);

        // console.log(this.items[0].children[0]);
        this.currentLoadedItem = e;
        this.prompt = true;
      });
    });
  },
};
</script>

<style>
</style>