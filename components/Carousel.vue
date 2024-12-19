<template>


  <div class="carousel">
    <div class="carousel-ctrl d-flex align-items-center justify-content-between">
      <div class="carousel-btn" @click="scrollLeft()"><i class="bi bi-caret-left-fill"></i></div>
      <div class="carousel-btn" @click="scrollRight(1)"><i class="bi bi-caret-right-fill"></i></div>
    </div>
  <div id="lightgallery" class="overflow-x-scroll overflow-y-hidden h-[160px] whitespace-nowrap no-scrollbar">
    
    <!-- <a v-for="path in Object.keys(glob)" :key="path" class="h-full" href="" target="."> -->
    <a v-for="path in Object.keys(glob)" :key="path" class="h-full">
      <img :src="images[path]" class="h-full" alt="" />
    </a>

  </div>
  
  </div>


</template>

<script setup>
// const props = defineProps({
//   imgPath: { type: String, required: true },
// })


// requiring all photos from 
const glob = import.meta.glob('@/assets/images/showcase/*.jpg', { eager: true })
// const glob = import.meta.glob('@/assets/images/showcase/*(*.jpg|*.JPG)', { eager: true })
// var glob = import.meta.glob('@/assets/images/showcase/*.JPG', { eager: true })

// glob = {...glob, ...newGlob}
// console.log("STARTING ONE")
// console.log(glob)
// console.log("STARTING TWO")
// console.log(Object(glob))



const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [key, value.default])
)





</script>
<script>
function scrollLeft() {
  const gallery = document.getElementById('lightgallery')
  gallery.scrollLeft -= gallery.offsetWidth * 0.5;
}
function scrollRight() {
  const gallery = document.getElementById('lightgallery')
  gallery.scrollLeft += gallery.offsetWidth * 0.5;
}
</script>



<style scoped>
.carousel {
  display: flex;
  padding: 0;


  height: 300px;

  /* border: 4px solid #000000; */
  box-shadow: 0px 4px 20px 0px #000000;
}

.carousel-ctrl {
  width: 100%;
  height: 100%;

  position: absolute;

  pointer-events: none;
}
.carousel-btn {
  background-color: #00000080;
  padding: 0px 2px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  pointer-events: all;
}

#lightgallery {
  /* height: 160px; */
  height: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  scroll-behavior: smooth;
  
  padding: 0;

  background-color: #FF000000;
}
#lightgallery::-webkit-scrollbar {
  display: none;
}


.h-full {
  height: 100%;
  padding: 0px 2px;
}
</style>