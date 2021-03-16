<template>
  <div id="app">
    <h3>Sample Get</h3>
    <h4>Get All</h4>
    <pre>{{pokemon}}</pre>
    <h4>Selected Pokemon</h4>
    <pre>{{selected}}</pre>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      pokemon: [],
      selected: {}
    }
  },
  methods: {
    getAllPokemon () {
      this.$api.Pokemon.get({
        success: (data) => {
          console.log(data)
          this.pokemon = JSON.stringify(data.results, null, 6)
        },
        fail: (error) => {
          console.log(error)
        }
      })
    },
    getSpecificPokemon () {
      this.$api.Pokemon.get({
        slug: 'bulbasaur',
        success: (data) => {
          console.log(data)
          this.selected = data
        },
        fail: (error) => {
          console.log(error)
        }
      })
    }
  },
  created() {
    this.getAllPokemon()
    this.getSpecificPokemon()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
