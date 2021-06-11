<template style="../assets/videogrid.scss">
  <div class="videos_grid" id="change_with_size">
    <div class="videos_a" v-for="video in videos" v-bind:key="video.url">
      <div class="col video_a">
        <a v-bind:href=getstr(video.index,video.url) target="_blank" style="text-decoration: none;"
          v-bind:url="video.url">
          <div class="img-overflow">
            <img :src=video.preview alt="" style="width: 400px;overflow:hidden;">
            <p class="video_time"> {{ video.time_long }} </p>
          </div>

          <div class="video-content">
            <img :src=video.channel_img alt="" class="channel_img">
            <div class="video_dates">
              <p>{{ video.name }}</p>
              <div class="video_grey">
                <p>{{ video.channel }}</p>
                <p>{{ video.views }} просмотров • {{video.time}}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import videos_json from '../content/videos.json'

  export default {
    data() {
      return {
        props: ["url"],
        users: [],
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
