<template>
  <div>
    <div v-if='!loading'>
      <div class="moviesSection">
        <p>影院热映<router-link to="/movie/in_theaters">更多</router-link></p>
        <swiperItem :options='swiperOptions' :swiperList='hotMovies'></swiperItem>
      </div>
      <div class="moviesSection">
        <p>即将上映<router-link to="/movie/coming_soon">更多</router-link></p>
        <swiperItem :options='swiperOptions' :swiperList='newMovies'></swiperItem>
      </div>
      <div class="moviesSection">
        <p>top250<router-link to="/movie/top250">更多</router-link></p>
        <swiperItem :options='swiperOptions' :swiperList='topMovies'></swiperItem>
      </div>
    </div>
    <loading v-if='loading'></loading>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import SectionHeader from '../components/SectionHeader'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ratingStar from '../components/ratingStar'
import loading from '../components/loading'
import swiperItem from '../components/swiperItem'

export default {
  name: 'movie',
  data () {
    return {
      icon: '../assets/douban_movie_icon',
      searchUrl: '/v2/movie/search?q=',
      itemList: [
        {
          title: '正在热映',
          path: '/movie/in_theaters'
        },
        {
          title: '即将上映',
          path: '/movie/coming_soon'
        },
        {
          title: 'top250',
          path: '/movie/top250'
        },
        {
          title: '北美票房榜',
          path: '/movie/us_box'
        }
      ],
      swiperOptions: {
        pagination: null,
        slidesPerView: 4,
        paginationClickable: true
      },
      loading: true
    }
  },
  computed: mapState({
    hotMovies: state => state.movie.in_theaters,
    topMovies: state => state.movie.top250,
    newMovies: state => state.movie.coming_soon
  }),
  methods: {
    getMovie () {
      this.$store.dispatch('getMovie').then(() => {
        this.loading = false
      })
    }
  },
  created () {
    this.getMovie()
  },
  components: {
    SectionHeader,
    swiperItem,
    // swiperSlide,
    ratingStar,
    loading
  }
}
</script>
<style scoped lang='scss'>
  .hotMovies, .topMovies, .newMovies{
    overflow:hidden;
    font-size:14px;
    /*width: 60%;*/
    display:flex;
    justify-content: space-between;
  }
  .moviesSection{
    width:60%;
    margin:20px auto;
  }
  .moviesSection p{
    margin:10px 0 18px;
    padding-bottom:10px;
    border-bottom:1px solid #eaeaea;
    a{
      float:right;
      color:#072;
      font-size:14px;
    }
  }
</style>
