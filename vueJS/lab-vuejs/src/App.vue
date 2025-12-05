<script setup></script>

<template>
  <h1>{{ titre }}</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>Compteur : {{ compteur }}</p>
  <button @click="compter">Compter</button>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            compteur: 10,
            titre: "Mon titre"
        }
    },
    methods: {
        compter() {
            this.compteur++
        }
    }
}
</script>

<style scoped></style>
