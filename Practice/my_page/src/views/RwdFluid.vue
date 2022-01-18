<template>
    <div class="box">
        <div class="item_l">
            <img class="item_show" :src="imgUrl">
        </div>
        <div class="box_item">
            <img class="item_img" @click="changeImage" src="../assets/RWD-fluid_layout-L.png">            
        </div>
        <div class="box_item">
            <img class="item_img" @click="changeImage" src="../assets/RWD-fluid_layout-M.png">
        </div>
        <div class="box_item">
            <img class="item_img" @click="changeImage" src="../assets/RWD-fluid_layout-S.png">
        </div>
    </div>
</template>

<script>
// import ChangeImage from '@/components/ChangeImage.vue'
 
export default {
  name: 'RwdFluid',
  data() {
      return {
        //   imgUrl: ''
      }
  },
  props: {
    // imgUrl: String
  },
  Component: {
    // ChangeImage
  },
  methods: {
      changeImage: function(){
        // let urls = this.getAttribute('src');
        let urls = document.querySelectorAll('.item_img').src;
        let newUrl = document.querySelector('.item_show').src;
        console.log(urls);
        console.log(newUrl);
        // let url = this.getAttribute('href');
        // console.log(url);

        urls.forEach( url => {
            let imgUrl = url;
            console.log(url);
            // return document.querySelector('.item_show').src = url   
            return imgUrl
        });     
      }
  }
}
</script>

<style scoped>
.box {
    display: flex;
    flex-wrap: wrap;
    margin-block: 100px;
}
.item_l {
    flex: 1 0 calc(100% / 12 * 12);
    margin-bottom: 50px;
}
.item_show {
    width: 80%;
    height: initial;
}
.box_item {
    flex: 1 0 calc(100% / 12 * 4);
}
img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 10px;
}
</style>