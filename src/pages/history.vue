<template>
<div>
  <div class="row">
    <div class="col-1 col-md-3 "></div>
    <div class="col-10 col-md-6">
      <q-card class="my-card q-mt-lg">
        <q-card-section>
          <div class="text-h6 text-center" style="color:#F39C12"> January</div>
          <q-separator color="black" class="q-mt-md" />
        </q-card-section>

        <q-card-actions vertical>
          <div class="row q-pa-none q-mt-md">
            <div class="col-6">
              <div
                class="text-subtitle2 text-center"
              >Total Income
              </div>
            </div>
            <div class="col-6">
              <div class="text-subtitle2 text-center q-mt-none">
                25000
              </div>
            </div>
          </div>

          <div class="row q-pa-none">
            <div class="col-6">
              <div
                class="text-subtitle2 text-center q-mt-md"
              >Total Consumption
              </div>
            </div>
            <div class="col-6">
              <div class="text-subtitle2 text-center q-mt-md">
                25000
              </div>
            </div>
          </div>

          <div class="row q-pa-none">
            <div class="col-6">
              <div
                class="text-subtitle2 text-center q-mt-md"
              >Total Debit
              </div>
            </div>
            <div class="col-6">
              <div class="text-subtitle2 text-center q-mt-md">
                10000
              </div>
            </div>
          </div>

          <div class="row q-pa-none">
            <div class="col-6">
              <div
                class="text-subtitle2 text-center q-mt-md"
              >Total Credit
              </div>
            </div>
            <div class="col-6">
              <div class="text-subtitle2 text-center q-mt-md">
                0
              </div>
            </div>
          </div>
        </q-card-actions>
        <div class="text-center">
        <q-btn outline rounded color="black" label="Watch Full Record" class="q-mb-lg" />
        </div>
      </q-card>
    </div>
    <div class="col-1 col-md-3"></div>

  </div>
  <div class="row q-mt-lg">
    <div class="col-3"></div>
    <div class="col-6">
      <div padding style="border:1px solid lightgrey; border-radius:10px" class="shadow-1">

      <div class="row q-pa-none">
            <div class="col-6">
              <div
                class="text-h6 text-center q-mt-sm"
              >January
              </div>
            </div>
            <div class="col-6">
              <div class="text-h6 text-center q-mt-sm">
                2020
              </div>
            </div>
          </div>

          <div class="row q-pa-none">
            <div class="col-6">
              <div
                class="text-h6 text-center q-mt-sm"
              >January
              </div>
            </div>
            <div class="col-6">
              <div class="text-h6 text-center q-mt-sm">
                2020
              </div>
            </div>
          </div>

          <div class="row q-pa-none">
            <div class="col-6">
              <div
                class="text-h6 text-center q-mt-sm"
              >January
              </div>
            </div>
            <div class="col-6">
              <div class="text-h6 text-center q-mt-sm">
                2020
              </div>
            </div>
          </div>

          
      </div>
    </div>
    <div class="col-3"></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.my-card {
  border-radius: 40px;
}
</style>