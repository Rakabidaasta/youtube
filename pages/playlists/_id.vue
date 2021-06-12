<template style="../../assets/idplaylist.scss">
    <div>
        <Navbar />
        <div class="playlist">
            <div class="playlist_info" style="text-decoration: none;">
                <p class="playlist_info_p"><img width="20" src="../../static/playlist.svg" alt=""> Название: {{ playlist.name }}</p>
                <p class="playlist_info_p">{{ playlist.len }} видео</p>
                <div class="playlists_item" v-for="(video,index) in playlist.content" :key="index.video">
                    <img :src=video.preview alt="" v-if="index === 0">
                </div>
            </div>
            <div>
                <h3 class="text-light"> Все видео плейлиста </h3>
                <div class="vid_items" v-for="video in playlist.content" v-bind:key="video.index">
                    <a :href=getstr(video.index) class="vid_item" target="_blank">
                        <div class="vid_img playlists_item main_img_play">
                            <img :src=video.preview alt="">
                        </div>
                        <div class="vid_info">
                            <p>{{ video.name }}</p>
                            <p class="text_gray"> {{video.views}} просмотров • {{ video.time }}</p>
                        </div>
                    </a>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import playlists_json from '../../content/playlists.json'

export default {
    data() {
        return {
            index: this.$route.params.id,
            playlist: playlists_json[this.$route.params.id]
        }
    },
    methods: {
      getstr(n) {
        return "../" + n + "?id=" + n;
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