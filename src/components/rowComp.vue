<template>
  <div>
    <div
      v-for="(item, k) in items"
      :key="k"
      class="recorddiv column q-ma-sm q-pa-sm"
    >
      <div class="row justify-between">
        <div>{{ item.incomeDescription }}</div>
        <div>{{ item.incomeValue }}</div>
        <div class="row">
          <div>
            <!-- <span @click="prompt = !prompt" class="mdi mdi-plus"></span> -->
          </div>
          <div>
            <span class="mdi mdi-plus" @click="handleAddClick(item)"></span
            ><span class="mdi mdi-chevron-down"></span>
          </div>
        </div>
      </div>
      <!-- start children -->
      <rowComponent
        :items="item.children"
        v-if="item.children && item.children.length"
      />
      <!-- End Children -->
      <!-- start dialog -->

      <!-- end dialog -->
    </div>
  </div>
</template>

<script>
export default {
  name: "rowComponent",
  props: ["items"],
  methods: {
    handleAddClick(e) {
      this.$root.$emit("addCalled", e);
    },
  },
};
</script>
<style>
</style>