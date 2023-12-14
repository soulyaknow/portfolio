<template>
    <div class="h-screen w-screen">
        <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
        <div class="md:mt-28 mt-20 md:p-10 flex flex-col transparent">
            <div class="front-box grid gap-x-10 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                <div class="todo-app w-full h-full text-center">
                    <div class="todo-img md:mt-10 mt-4 md:h-80 md:w-80 h-[200px] w-[200px] mx-auto  md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer">
                        <img src="../assets/todo.png" alt="Todo App" class="h-full w-full md:object-cover object-contain">
                    </div>
                    <div class="mt-[25px] w-full h-32">
                        <router-link to="/todoapp">
                            <h1 class="w-[300px] text-center mx-auto hover:bg-slate-800 md:text-[30px] rounded-2xl text-[20px]">
                                TODO APP
                            </h1>
                        </router-link>
                        <p @click="toggleOne" class="md:mt-2 mt-4 text mx-auto w-[300px] text-center md:text-[15px] rounded-2xl text-[20px] cursor-pointer">Click me!</p>
                        <p v-if="showFullDescription" class="md:mt-2 mt-4 text-gray-400 mx-auto w-[300px] text-center md:text-[30px] rounded-2xl text-[20px]">
                            {{ todoDescription }}
                        </p>                
                    </div>
                </div>
                <div class="alarm-app w-full h-full text-center">
                    <div class="todo-img md:mt-10 mt-4 md:h-80 md:w-80 h-[200px] w-[200px] mx-auto  md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer">
                        <img src="../assets/alarm.png" alt="alarm App" class="h-full w-full md:object-cover object-contain">
                    </div>
                    <div class="mt-[25px] w-full h-32">
                        <router-link to="/alarmclockapp">
                            <h1 class="w-[300px] text-center mx-auto hover:bg-slate-800 md:text-[30px] rounded-2xl text-[20px]">
                                ALARM CLOCK APP
                            </h1>
                        </router-link>
                        <p @click="toggleTwo" class="md:mt-2 mt-4 text mx-auto w-[300px] text-center md:text-[15px] rounded-2xl text-[20px] cursor-pointer">Click me!</p>
                        <p v-if="showFullDescriptionTwo" class="md:mt-2 mt-4 text-gray-400 mx-auto w-[300px] text-center md:text-[30px] rounded-2xl text-[20px]">
                            {{ sudokuDescription }}
                        </p>                
                    </div>
                </div>
                <div class="alarm-app w-full h-full text-center">
                    <div class="todo-img md:mt-10 mt-4 md:h-80 md:w-80 h-[200px] w-[200px] mx-auto  md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer">
                        <img src="../assets/alarm.png" alt="alarm App" class="h-full w-full md:object-cover object-contain">
                    </div>
                    <div class="mt-[25px] w-full h-32">
                        <router-link to="/chatapp">
                            <h1 class="w-[300px] text-center mx-auto hover:bg-slate-800 md:text-[30px] rounded-2xl text-[20px]">
                                Chat App
                            </h1>
                        </router-link>
                        <p @click="toggleTwo" class="md:mt-2 mt-4 text mx-auto w-[300px] text-center md:text-[15px] rounded-2xl text-[20px] cursor-pointer">Click me!</p>
                        <p v-if="showFullDescriptionTwo" class="md:mt-2 mt-4 text-gray-400 mx-auto w-[300px] text-center md:text-[30px] rounded-2xl text-[20px]">
                            {{ sudokuDescription }}
                        </p>                
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import NavarOnly from '../components/NavarOnly.vue';

const todoDescription = 'You can save your daily task in this application. Try now!';
const sudokuDescription = 'Set your time with this alarm application';
const showFullDescription = ref(false);
const showFullDescriptionTwo = ref(false);

const toggleOne = () => {
  showFullDescription.value = !showFullDescription.value;
};

const toggleTwo = () => {
    showFullDescriptionTwo.value = !showFullDescriptionTwo.value;
};
</script>
<style scoped>
a{
    text-decoration: none;
}
h1,p{
    color: #0f0;
}
</style>