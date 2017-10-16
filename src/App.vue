<template lang="pug">
  #app
    section.hero
      .hero-body
        .container.has-text-centered
          img(src="./assets/logo.png")
          h1.title Vue-Example
          h2.subtitle Ejemplo que muestra las películas de Star Wars

    ve-loader(v-show="isLoading")
    .section(v-show="!isLoading")
      .container
        h2.title Lista de películas
        .section
          .columns.is-multiline
            .column.is-one-quarter(v-for="f in films")
              ve-film(:film="f")
</template>

<script>

import { HTTP } from './services/films'
import VeFilm from './components/Films.vue'
import VeLoader from './components/Loader.vue'

export default {
  name: 'app',
  components: { VeFilm, VeLoader },
  data () {
    return {
      films: [],
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    HTTP.get().then(res => {
      this.films = res.data.results
      this.isLoading = false
    }).catch(err => {
      console.error(err)
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .result {
    margin-top: 20px;
  }
</style>
