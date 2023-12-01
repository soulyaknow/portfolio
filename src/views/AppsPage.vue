<template>
    <div class="h-screen w-screen">
        <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
        <div class="md:mt-28 mt-20 md:p-10 w-screen flex flex-col md:h-[44.3rem] h-[50.5rem] bg-slate-950">
            <div class="grid gap-20 lg:grid-cols-2 sm-grid-cols-2 md:grid-cols-2 grid-cols-1">
                <!--todo app-->
                <div class="mt-25 md:h-[40rem] md:w-full w-full h-52 md:mb-0 mb-20">
                    <div class="todo-img backdrop md:mt-10 mt-2 md:h-80 md:w-80 md:ml-52 h-[160px] w-[160px] ml-[120px] rounded-xl md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer">
                        <img src="../assets/todo.png" alt="Todo App" class="h-full w-full">
                    </div>
                    <div class="mt-[25px] w-full h-32">
                        <a href="/todoapp">
                            <h1 class="backdrop w-[300px] text-center md:ml-[220px] ml-[40px] hover:bg-slate-800 md:text-[30px] 
                                rounded-2xl text-[20px]">
                                TODO APP
                            </h1>
                        </a>
                        <p @click="toggleOne" class="backdrop md:mt-2 mt-4 text-gray-700 w-[300px] text-center md:ml-[220px] ml-[40px] md:text-[15px] 
                                rounded-2xl text-[20px] cursor-pointer">Click me!</p>
                        <p v-if="showFullDescription" class="backdrop md:mt-2 mt-4 text-gray-700 w-[300px] text-center md:ml-[220px] ml-[40px] md:text-[30px] 
                                rounded-2xl text-[20px]">
                            {{ todoDescription }}
                        </p>                
                    </div>
                </div>
                <!--another app-->
                <div class="mt-25 md:h-[40rem] md:w-full w-full h-52">
                    <div class="todo-img backdrop md:mt-10 mt-2 md:h-80 md:w-80 md:ml-52 h-[160px] w-[160px] ml-[120px] rounded-xl md:hover:-translate-y-1 md:hover:scale-90 md:cursor-pointer">
                        <img src="../assets/alarm.png" alt="alarm App" class="h-full w-full rounded-xl">
                    </div>
                    <div class="mt-[25px] w-full h-12">
                        <a href="/alarmclockapp">
                            <h1 class="backdrop w-[300px] text-center md:ml-[220px] ml-[40px] hover:bg-slate-800 md:text-[30px] 
                                rounded-2xl text-[20px]">
                                ALARM CLOCK APP
                            </h1>
                        </a> 
                        <p @click="toggleTwo" class="backdrop md:mt-2 mt-4 text-gray-700 w-[300px] text-center md:ml-[220px] ml-[40px] md:text-[15px] 
                                rounded-2xl text-[20px] cursor-pointer">Click me!</p>
                        <p v-if="showFullDescriptionTwo"  class="backdrop md:mt-2 mt-4 text-gray-700 w-[300px] text-center md:ml-[220px] ml-[40px] md:text-[30px] 
                                rounded-2xl text-[20px]">
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
.backdrop{
    border: 1px solid #24c2ab;
}
a{
    text-decoration: none;
}
h1{
    color: #0f0;
}
</style>