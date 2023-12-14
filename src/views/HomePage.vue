<template>
  <div class="h-screen w-screen">
    <NavarOnly class="md:h-28 h-20 transparent fixed w-full z-20 top-0 start-0"/>
    <div class="md:mt-28 mt-20 md:p-10 flex flex-col transparent">
      <div class="front-box grid gap-10 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        <div class="name-box w-full h-full">
          <img src="../assets/background.gif" class="md:h-62 md:w-full md:hidden block overflow-hidden rounded-br-full" alt="RanLogo">
          <img src="../assets/background1.gif" class="md:h-[300px] md:w-full md:block hidden overflow-hidden" alt="RanLogo">
          <div class="name md:block hidden text-center">
            <h1 class="pt-6 text-3xl pb-2 font-poppins text-teal-500">RANEL B. SOLIANO</h1>
            <p class="py-2 text">A Frontend Developer</p>
            <div class="text-white flex w-full justify-center">
              <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-facebook"></i></a>
              <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-youtube"></i></a>
              <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-tiktok"></i></a>
              <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-instagram"></i></a>
              <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
        <div class="picture-box w-full md:bg-transparent bg-slate-950 rounded-tr-full md:rounded-tr-0
         flex flex-col md:h-[500px] h-full md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer overflow-visible pb-20">
          <img src="../assets/picture3.jpg" class="md:h-full md:w-full h-10 rounded-2xl md:block hidden" alt="Ran Picture">
          <div class="md:hidden block flex flex-col items-center">
            <img src="../assets/picture3.jpg" class="h-[180px] rounded-full object-cover" alt="Ran Picture">
            <div class="text-center">
              <h1 class="pt-6 text-3xl pb-2 font-poppins text-teal-500">RANEL B. SOLIANO</h1>
              <p class="py-2 text">A Frontend Developer</p>
              <div class="text-white flex w-full justify-center">
                <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-facebook"></i></a>
                <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-youtube"></i></a>
                <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-tiktok"></i></a>
                <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-instagram"></i></a>
                <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavarOnly from '../components/NavarOnly.vue'
</script>
<style scoped>
.front-box {
    z-index: 1000px;
}

@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 10.2em;
  } /* adjust width based on content */
  90%,
  100% {
    width: 0;
  }
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  /* color: #0f0; */
  color: rgb(20,184,166,1);
  animation: typeAndDelete 5s steps(11) infinite,
    blinkCursor 0.5s step-end infinite alternate;
}
</style>