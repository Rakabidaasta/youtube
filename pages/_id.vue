<template>
  <div class="bg-black text-white">
    <Navbar />
    <div class="video_item">
      <iframe width="560" height="315" :src=urlVideo title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <a href="/#"> zzzzz {{url}} aaa </a>
    </div>
  </div>
</template>

<script>
  import videos_json from '../content/videos.json'
  export default {

    data() {
      return {
        videos: videos_json,
        url: this.$route.params.id,
      }
    },

    computed: {
      urlVideo: function () {
        return this.videos[this.url].url
      }
    }
  }

</script>


<style>
  body {
    background-color: #181818;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
