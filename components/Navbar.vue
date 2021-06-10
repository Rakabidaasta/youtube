<template style="../assets/navbar.scss">
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-gray-dark fixed">
      <div class="burger" @click="checkClicked">
        <img src="../static/burger.svg" alt="">
      </div>
      <div class="logo">
        <a href="/">
          <img width="100" src="../static/logo.svg" alt="">
        </a>
      </div>
      <div class="row center w-50">
        <div class="col-12 sidebar">
          <div class="input-group" id="change_with_size_search">
            <input class="form-control input py-2" type="search" value="search">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="/#" class="login right w-10" @click="checkLogin">Войти</a>
    </nav>
    <div class="blur" v-if="isClicked || isLogin"></div>
    <transition name="sidebar">
      <aside class="side" v-if="isClicked">
        <div class="scroll_nav">
          <div class="side_nav">
            <div class="burger" @click="checkClicked">
              <img src="../static/burger.svg" alt="">
            </div>
            <div class="logo">
              <a href="/">
                <img width="100" src="../static/logo.svg" alt="">
              </a>
            </div>
          </div>
          <hr>
          <div class="side_links">
            <div class="side_link" id="first">
              <img width="19" src="../static/home.svg" alt="">
              <a class="side_link_a" href="/#">Главная</a>
            </div>
            <div class="side_link">
              <img width="19" src="../static/compass.svg" alt="">
              <a class="side_link_a" href="/#">Навигатор</a>
            </div>
            <div class="side_link">
              <img width="19" src="../static/sub.svg" alt="">
              <a class="side_link_a" href="/#">Подписки</a>
            </div>
          </div>
          <hr>
          <div class="side_links">
            <div class="side_link">
              <img width="20" src="../static/libs.svg" alt="">
              <a class="side_link_a" href="/#2">Библиотека</a>
            </div>
            <div class="side_link">
              <img width="19" src="../static/history.svg" alt="">
              <a class="side_link_a" href="/#1">История</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/your_videos.svg" alt="">
              <a class="side_link_a" href="/#">Ваши видео</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/watch_later.svg" alt="">
              <a class="side_link_a" href="/#">Смотреть позже</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/liked.svg" alt="">
              <a class="side_link_a" href="/#">Понравившиеся</a>
            </div>
            <div class="side_link" @click="checkDropdown" v-if="!isDropdown">
              <img width="20" src="../static/list.svg" alt="">
              <a class="side_link_a" href="/#">Развернуть</a>
            </div>
            <div class="playlists" v-if="isDropdown">
              <div class="playlist_item">
                <img width="20" src="../static/playlist.svg" alt="">
                <a class="side_link_a" href="/#">Placeholder</a>
              </div>
              <div class="playlist_item">
                <img width="20" src="../static/playlist.svg" alt="">
                <a class="side_link_a" href="/#">Placeholder</a>
              </div>
              <div class="playlist_item">
                <img width="20" src="../static/live_playlist.svg" alt="">
                <a class="side_link_a" href="/#">Placeholder</a>
              </div>
              <div class="playlist_item">
                <img width="20" src="../static/playlist.svg" alt="">
                <a class="side_link_a" href="/#">Placeholder</a>
              </div>
            </div>
          </div>
          <hr>
          <h3 class="aside_header">Подписки</h3>
          <div class="subs" v-for="video in videos" v-bind:key="video.url">
            <div class="playlist_item subs_item" v-if="checkIndex(video.index, 0)">
              <img :src=video.channel_img alt="">
              <a href="/#">{{ video.channel }}</a>
            </div>
          </div>
          <div class="side_link" @click="checkSub" v-if="!isSub">
            <img width="20" src="../static/list.svg" alt="">
            <a class="side_link_a" href="/#" v-bind="tests">Показать ещё 5</a>
          </div>

          <div class="sub_adds" v-if="isSub">
            <div class="subs" v-for="video in videos" v-bind:key="video.url">
              <div class="playlist_item subs_item" v-if="checkIndex(video.index, 1)">
                <img :src=video.channel_img alt="">
                <a href="/#">{{ video.channel }}</a>
              </div>
            </div>
          </div>
          <hr>
          <h3 class="aside_header">Другие возможности</h3>
          <div class="side_links">
            <div class="side_link">
              <img width="20" src="../static/logo_mini.svg" alt="">
              <a class="side_link_a" href="/#2">YouTube Premium</a>
            </div>
            <div class="side_link">
              <img width="19" src="../static/videogames.svg" alt="">
              <a class="side_link_a" href="/#1">Видеоигры</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/live.svg" alt="">
              <a class="side_link_a" href="/#">Трансляции</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/sport.svg" alt="">
              <a class="side_link_a" href="/#">Спорт</a>
            </div>
          </div>
          <hr>
          <div class="side_links">
            <div class="side_link">
              <img width="20" src="../static/settings.svg" alt="">
              <a class="side_link_a" href="/#">Настройки</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/reports.svg" alt="">
              <a class="side_link_a" href="/#">Жалобы</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/faq.svg" alt="">
              <a class="side_link_a" href="/#">Справка</a>
            </div>
            <div class="side_link">
              <img width="20" src="../static/report.svg" alt="">
              <a class="side_link_a" href="/#">Отправить отзыв</a>
            </div>
          </div>
        </div>
      </aside>
    </transition>

    <div class="login_div" v-if="isLogin">
      <div class="login_preview">
        <div class="logo">
          <img width="200" src="../static/logo.svg" alt="">
        </div>
        <h3 class="login_header">Вход</h3>
      </div>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
        <label for="name" class="form__label">Name</label>
      </div>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
        <label for="name" class="form__label">Password</label>
      </div>
      <a href="/#" class="login log_ok" @click="checkLogin">Войти</a>
    </div>
  </div>

</template>

<script src="https://unpkg.com/scrollnav@3.0.1/dist/scrollnav.min.umd.js"></script>
<script>
  const a = document.querySelector('.main-content');
  scrollnav.init(a);

</script>
<script>
  import content from '../content/test.json'
  import videos_json from '../static/videos/videos.json'
  export default {
    data() {
      return {
        isClicked: false,
        isDropdown: false,
        isSub: false,
        tests: content,
        isLogin: false,
        videos: videos_json,
        subAdds: Number(content.length - 5)
      }
    },
    mounted() {
      var el = document.getElementById("change_with_size_search")
      if (window.innerWidth < 800) {
        el.style.visibility = "hidden";
      } else {
        el.style.visibility = "visible";
      }

      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },

    methods: {
      checkClicked() {
        this.isClicked = !this.isClicked
      },
      checkLogin() {
        this.isLogin = !this.isLogin
      },
      checkSub() {
        this.isSub = !this.isSub
      },
      checkDropdown() {
        this.isDropdown = !this.isDropdown
      },
      checkIndex(index, ind) {
        if (ind === 0) {
          if (index > 4) {
            return false
          } else {
            return true
          }
        } else {
          if (index < 5) {
            return false
          } else {
            return true
          }
        }
      },
      total: function () {
        let tot = 0;
        tot = content.length - 5
        return tot
      },
      onResize() {
        var el = document.getElementById("change_with_size_search")
        if (window.innerWidth < 800) {
          el.style.visibility = "hidden";
        } else {
          el.style.visibility = "visible";
        }

      }
    },
  }

</script>
