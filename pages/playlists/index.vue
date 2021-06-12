<template style="../assets/playlist.scss">
    <div class="bg-black text-white">
        <Navbar />
        <div class="playlists_grid">
            <div class="playlists_items" v-for="playlist in playlists">
                <a :href=getstr(playlist.index) target="_blank">
                    <div class="playlist_info" style="text-decoration: none;">
                        <p class="playlist_info_p"> <img width="20" src="../../static/playlist.svg" alt=""> {{ playlist.name }}</p>
                        <p class="playlist_info_p">{{ playlist.len }} видео</p>
                    </div>
                    <div class="play_videos">
                        <div v-for="(video,index) in playlist.content" v-bind:class="index === 0 ? 'main_img_play' : 'playlists_item hide'">
                            <img :src=video.preview alt="" v-if="index < 6">
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import paylists_json from '../../content/playlists.json'

export default {
    data() {
        return {
            playlists: paylists_json,
            video_play: []
        }
    },
    methods: {
      getstr(n) {
        return n + "?id=" + n;
      }
    }
}
</script>


<style>
  body {
    background-color: #181818;
  }
</style>