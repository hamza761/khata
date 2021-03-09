<template>
  <q-page>
    <div class="row d-flex justify-around">
      <q-btn :class="{ clr: inc }" label="Income" @click="income" />
      <q-btn :class="{ clr: con }" label="Consumption" @click="consumption" />
      <q-btn :class="{ clr: deb }" label="Debit" @click="debit" />
      <q-btn :class="{ clr: cre }" label="Credit" @click="credit" />
    </div>
    <div>
      <income v-if="inc" />
      <consumption v-if="con" />
      <debit v-if="deb" />
      <credit v-if="cre" />
    </div>
  </q-page>
</template>

<script>
import income from "components/income.vue";
import consumption from "components/consumption.vue";
import debit from "components/debit.vue";
import credit from "components/credit.vue";
export default {
  data() {
    return {
      inc: true,
      con: false,
      deb: false,
      cre: false,
      tab: "income",
    };
  },
  components: { income, consumption, debit, credit },
  methods: {
    income() {
      this.con = false;
      this.deb = false;
      this.cre = false;
      this.inc = true;
      if ((this.inc = true)) {
      }
    },
    consumption() {
      this.deb = false;
      this.cre = false;
      this.inc = false;
      this.con = true;
    },
    debit() {
      this.con = false;
      this.cre = false;
      this.inc = false;
      this.deb = true;
    },
    credit() {
      this.con = false;
      this.deb = false;
      this.inc = false;
      this.cre = true;
    },
  },
};
</script>
