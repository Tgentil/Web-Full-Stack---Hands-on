<template>
  <q-layout view="hHr lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Cards de Contato
        </q-toolbar-title>
        <button id="theme-toggle" class="btn-toggle">Dark Mode</button>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="row flex-column">
        <div class="col instructions">Mude o nome do primeiro card :</div>
        <div class="col">
          <input class="custom-input" v-model="arrContatos[0].nome" />
        </div>
      </div>
      <div class="row flex-column">
        <div class="col instructions">Adicione / Remova cards:</div>
        <div class="col">
          <div class="button-wrapper">
            <button class="btn-add" @click="add">+</button>
            <button class="btn-remove" @click="remove">-</button>
          </div>
        </div>
      </div>
      <div v-for="c in arrContatos" v-bind:key="c.fone">
        <card-contato :contato="c" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import CardContato from "../components/CardContato.vue";
import "../js/scripts.js";

export default {
  components: { CardContato },
  mounted() {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = "Light Mode";
      } else {
        toggleButton.innerHTML = "Dark Mode";
      }
    });
  },
  methods: {
    add() {
      this.arrContatos.push({
        nome: "Recruta",
        sobrenome: "Madagasgar",
        fone: "00000",
        email: "recruta@penguins.com",
      });
    },
    remove() {
      this.arrContatos.pop();
    },
  },
  data() {
    return {
      arrContatos: [
        {
          nome: "Thiago Gentil",
          sobrenome: "Gentil",
          fone: "48 99998888",
          email: "thiagogentil@fakegmail.com",
        },
      ],
    };
  },
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss">
@import "../css/app.scss";
</style>
