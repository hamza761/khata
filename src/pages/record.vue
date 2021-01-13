<template>
  <div class=" q-mt-sm bg-grey">
    <div class="row">

       
    <div  class="col-12">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          style="border: 1px solid; "
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" style="border:2px solid grey; border-radius:50px" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
          <q-tab name="faizan" label="faizan" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
              <!-- Accordin starts Here -->

              <template>
  <div >
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="mail"
        label="Inbox"
        caption="5 unread emails"
        default-opened
      >
        <q-expansion-item
          :header-inset-level="1"
          expand-separator
          icon="receipt"
          label="Receipts"
          default-opened
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Today" :header-inset-level="1" :content-inset-level="2">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item switch-toggle-side dense-toggle label="Yesterday" :header-inset-level="1" :content-inset-level="2">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-expansion-item>

        <q-expansion-item :header-inset-level="1" :content-inset-level="1" expand-separator icon="schedule" label="Postponed">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-expansion-item>

      <q-expansion-item :content-inset-level="0.5" expand-separator icon="mail" label="Inbox" caption="5 unread emails" default-opened>
        <q-expansion-item expand-separator :content-inset-level="0.5" icon="receipt" label="Receipts">

          <q-expansion-item label="Today" :content-inset-level="0.5">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item label="Yesterday" :content-inset-level="0.5">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-expansion-item>

        <q-expansion-item :content-inset-level="0.5" expand-separator icon="schedule" label="Postponed">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-expansion-item>
    </q-list>
  </div>
</template>
              <!-- Accordin Ends Here -->
          </q-tab-panel >

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
                  <q-tab-panel name="faizan">
            <div class="text-h6">faizan</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>


      </q-card>
        </div>





 
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>