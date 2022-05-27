<template>
  <div id="about">
      Here I tested axios get request with dummy json data.
      <div class="detail" v-for="(photo, i) in photos" :key="photo.id">
        <Photo :photo="photos[i]"/>
      </div>
  </div>
</template>

<script>
import Photo from '@/components/about/Photo.vue'
import axios from 'axios'

  export default {
    name: 'AboutPage',
    created() {
      this.fetchPhotos();
    },
    methods: {
        fetchPhotos() {
          axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(res => {
                // console.log(res.data);
                this.photos = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    data() {
        return {
            photos: [],
        }
    },
    components: {
      Photo,
    }
  }
</script>

<style>
  #about {
    margin-top: 20px;
  }
</style>