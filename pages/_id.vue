<template style="../assets/idvideo.scss">
  <div class="bg-black text-white">
    <Navbar />
    <div class="id_video" id="change_with_size">
      <div class="video_item">
        <iframe :src=urlVideo title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>

        <div class="video_header">
          {{ video.name }}
        </div>
        <div class="video_info">
          <div class="views">
            {{video.views}} просмотров • Дата премьеры: {{video.date}}
          </div>
          <div class="likes">
            <div class="like" v-bind:class="{ active_border: isLike }">
              <div class="share isliked" v-bind:class="{ active: isLike }" @click="isLike = true; likes++; dislikes--">
                <img width="20" src="../static/liked.svg" alt="">
                {{ likes }}
              </div>
              <div class="share isliked" v-bind:class="{ active: !isLike }" @click="isLike = false; dislikes++; likes--">
                <img width="20" src="../static/dislike.svg" alt="">
                {{ dislikes }}
              </div>
            </div>
            <div class="share">
              <img width="20" src="../static/share.svg" alt="">
              Поделиться
            </div>
            <div class="share">
              <img width="20" src="../static/add_to_playlist.svg" alt="">
              Сохранить
            </div>
            <div class="share">
              <img width="20" src="../static/three_dots.svg" alt="">
            </div>
          </div>
        </div>
        <hr>
        <div class="video_content">
          <div class="channel_info">
            <div class="channel_header">
              <img :src=video.channel_img alt="" class="channel_img">
              {{ video.channel }}
            </div>
          </div>
          <div class="button_subscribe" v-bind:class="{ subs_true: isSubsc}" @click="isSubsc = !isSubsc">
            {{ isSubsc ? 'Отписаться' : 'Подписаться' }}
          </div>
        </div>
            <div class="video_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nemo, molestias quam quos quae
              doloremque recusandae quidem aliquid ducimus facere repellendus autem rem odio accusamus optio eius?
              Ipsum,
              velit quas!
            </div>
      <hr>
      </div>
      <SmallVideoGrid style="grid-column: 4/5;"/>
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
        video: videos_json[this.$route.params.id],
        likes: 10,
        dislikes: 2,
        isLike: true,
        isSubsc: false
      }
    },

    computed: {
      urlVideo: function () {
        return this.videos[this.url].url
      }
    },
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
