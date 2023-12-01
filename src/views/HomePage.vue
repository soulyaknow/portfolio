<template>
    <div class="h-screen w-screen">
        <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
        <!-- home content-->
        <div class="md:mt-28 mt-20 md:p-10 w-screen flex flex-col md:h-[44.3rem] h-[36.5rem] bg-slate-950">
            <!--backdrop box-->
            <div class="backdrop md:w-[40rem] md:h-[25.3rem] h-[30rem] md:mt-[25px] mt-10 md:ml-20 md:rounded-2xl">
                <img src="../assets/background.gif" class="md:h-62 md:w-full md:hidden block overflow-hidden" alt="RanLogo">
                <img src="../assets/background1.gif" class="md:h-[300px] md:w-full md:block hidden overflow-hidden" alt="RanLogo">
            </div>
            <!--front box-->
            <div class="grid gap-20 lg:grid-cols-2 sm-grid-cols-2 grid-cols-2 front-box">
                <!--name box-->
                <div class="namedrop md:rounded-b-2xl md:w-[40rem] md:h-[12rem] fixed md:bottom-[160px] md:left-[120px] bottom-0 h-[20rem] w-[25rem] bg-transparent flex flex-col">
                    <!--name-->
                    <div class="text-white md:mt-5 mt-20 h-20 w-full text-center">
                        <h1 class="pt-6 text-3xl pb-2 font-poppins text-teal-500 md:mr-0 mr-10">RANEL B. SOLIANO</h1>
                        <p class="py-2 text md:mr-0 mr-10">A Frontend Developer</p>
                    </div>
                    <!--Icon List-->
                    <div class="text-white flex w-full justify-center md:pt-10 pt-10 pr-10 md:pr-0">
                        <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-youtube"></i></a>
                        <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-tiktok"></i></a>
                        <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="px-3 hover:text-white text-teal-500"><i class="bi bi-github"></i></a>
                    </div>   
                </div>
                <!--picture box-->
                <div class="md:w-[40rem] md:h-[30.3rem] fixed md:bottom-[200px] 
                md:left-[900px] bottom-60 bg-black rounded-t-2xl md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer left-[110px]">
                <img src="../assets/picture.jpg" class="md:h-full md:w-full h-40  rounded-2xl" alt="Ran Picture">
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
/* .backdrop{
    border: 1px solid #24c2ab;
    background-color: #141927;
} */
/* .namedrop{
    border: 1px solid #24c2ab;
} */
</style>