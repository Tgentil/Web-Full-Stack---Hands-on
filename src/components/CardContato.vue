<template>
  <div>
    <q-card
      class="my-card text-white q-ma-md"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">{{ contato.nome }}</div>
        <div class="text-subtitle2">{{ contato.email }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <h6>{{ contato.fone }}</h6>
      </q-card-section>
    </q-card>
    <!--
      <input v-model="contato.fone"/>
-->
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    contato: Object,
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
