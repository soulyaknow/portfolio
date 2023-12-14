<template>
    <nav>
        <div class="max-w-full flex flex-wrap items-center justify-between mx-auto md:p-4 md:pr-0 md:pl-0 pr-4 pl-2 h-full transparent">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse md:pl-4">
                <img src="../assets/logo.jpg" class="md:h-16 h-16 rounded-2xl" alt="RanLogo">
            </a>
            <button data-collapse-toggle="navbar-default" @click="navStore.showNavar"
                type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 h-full" id="navbar-sticky"
                :class="{ visible: navStore.navarState }">
                <ul class="flex flex-col p-3 md:p-0 md:mt-0 font-medium rounded-lg md:space-x-10 rtl:space-x-reverse 
                md:flex-row md:transparent dark:bg-gray-800 md:h-full text-white bg-color h-[180px]">
                    <li>
                        <router-link to="/" class="block py-2 px-3 md:hover:transparent hover:bg-green-300 rounded-2xl hover:text-black">Home</router-link>
                    </li>
                    <li>
                        <router-link to="#" class="block py-2 px-3 md:hover-transparent hover:bg-green-300 rounded-2xl hover:text-black">About</router-link>
                    </li>
                    <li>
                        <router-link to="/apps" class="block py-2 px-3 md:hover-transparent hover:bg-green-300 rounded-2xl hover:text-black">Apps</router-link>
                    </li>
                    <li>
                        <router-link to="#" class="block py-2 px-3 md:hover-transparent hover:bg-green-300 rounded-2xl hover:text-black">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>  
</template>
<script setup>
import { useNavarStore } from '../store/navarStore';

const navStore = useNavarStore();

</script>

<style scoped>
.visible {
  display: block !important;
}
a{
    text-decoration: none;
}
.navar{
    background-image: linear-gradient(to right, #1f3f4d, #1d3d4d, #1b3b4e, #1a384e, #1a364e, #1c344f, #1f334f, #23314f, #293050, #2f2e50, #362c4f, #3c2a4e);
    background-color: #1e263b;
}

.bg-color {
  background-image: linear-gradient(to right, #1f3f4d, #1d3d4d, #1b3b4e, #1a384e, #1a364e, #1c344f, #1f334f, #23314f, #293050, #2f2e50, #362c4f, #3c2a4e);
  background-color: #1e263b;
}
</style>
