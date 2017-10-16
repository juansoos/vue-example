<template lang="pug">
  .card
    .card-content
      .media-content
        p.title.is-6
          strong {{ film.title }}
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      required: true
    }
  }
}
</script>

