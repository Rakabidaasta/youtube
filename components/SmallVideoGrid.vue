<template class="../assets/smallgridvideos.scss">
  <div class="small_grid_videos">
    <div class="videos_small" v-for="video in videos" v-bind:key="video.index">
      <a v-bind:href=getstr(video.index,video.url) target="_blank" style="text-decoration: none;">
        <div class="video_small">
          <img class="img-overflow-small" :src=video.preview alt="">
          <div class="video_small_info">
            <p>{{ video.name }}</p>
            <p class="small_gray_text">{{ video.channel }}</p>
            <p class="small_gray_text">{{ video.views }} просмотров •</p>
            <p class="small_gray_text">{{ video.time }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import videos_json from '../content/videos.json'

  export default {
    data() {
      return {
        videos: videos_json
      }
    },
    methods: {
      getstr(n, url) {
        return n + "?id=" + n;
      }
    }
  }

</script>
