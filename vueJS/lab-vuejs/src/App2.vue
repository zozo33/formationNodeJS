<script setup>
</script>

<!--faire tourner avec la commande node dbservicePostgres.js -->

<template>
  <div>
    <table>
      <button @click='getdata'>Lister les formations</button>
      <tr v-for="f in formations">
        <td>{{f.id}}</td><td>{{ f.libelle }}</td>
      </tr>
    </table>
  </div>
</template>

 <script>
export default {
    data () {
      return { 
        compteur : 0,
        formations : []
      }
    },
    methods : {
      getdata ()
      {
          fetch ("http://localhost:8000/").then (d => d.json()).then(
              formations => {
                  this.formations = formations;
              }
          )
      }
    }
  };
</script>

<style scoped>
</style>