<template>
    <div class="h-screen w-screen">
        <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
        <div class="md:mt-28 mt-20 md:p-10 w-screen flex md:h-[44.3rem] h-[36.3rem] bg-slate-950">
            <div class="backdrop md:w-[40rem] md:h-[30.3rem] md:mt-[25px] md:rounded-2xl md:ml-[410px] h-[480px] w-full mt-24">
                <h1 class="bg-green-400 w-full text-white text-center h-10 pt-2  md:rounded-t-2xl text-[20px]">Simple Alarm Clock</h1>
                
                <!--simple live clock-->
                <div class="border-2 border-black w-full h-64 pt-10 text-white text-center">
                    <h1 class="text-2xl font-semibold mb-4">Live Clock</h1>
                    <p class="text-4xl font-bold" ref="clock">{{ currentTime }} {{ amOrPm }}</p>
                    <div class="mt-4 md:max-h-20 overflow-y-scroll h-[80px]">
                        <p>Selected Alarm Time</p>
                        <ul class="flex flex-col max:h-4">
                            <li v-for="(alarmTime, index) in selectedAlarmTimes" :key="index" class="text-xl font-semibold">
                                {{ formatAlarmTime(alarmTime) }}
                                <span class="cursor-pointer" @click="removeAlarm(index)">
                                    <i class="bi bi-trash3"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div> 
                
                <!--setting time-->
                <div class="flex flex-col">
                    <div class="grid md:gap-x-4 gap-x-2 lg:grid-cols-2 sm-grid-cols-2 grid-cols-2">
                        <div class="my-4 md:ml-8">
                            <label for="hours" class="mr-2 md:ml-0 ml-2 text-white">Hours:</label>
                            <input v-model="hours" id="hours" type="number" class="border p-2 w-[60%] rounded-2xl text-center"/>
                        </div>     
                        <div class="my-4">
                            <label for="minutes" class="mr-2  text-white">Minutes:</label>
                            <input v-model="minutes" id="minutes" type="number" class="border p-2 w-[60%] rounded-2xl text-center"/>
                        </div>
                    </div>
                    <button @click="startAlarm" class="bg-green-400 text-gray-50 hover:text-gray-500 hover:bg-teal-500 py-2 px-4 rounded-md md:mt-8 mt-2 md:w-60 w-52 md:ml-52 ml-24">
                        Start Alarm
                    </button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import NavarOnly from '../components/NavarOnly.vue';


  const hours = ref(0);
  const minutes = ref(0);
  const currentTime = ref('');
  const selectedAlarmTimes = ref([]);
  const amOrPm = ref('');

  const startAlarm = () => {
    const totalMilliseconds = (hours.value * 60 + minutes.value) * 60 * 1000;
  
    if (totalMilliseconds > 0) {
        const alarmTime = formattedAlarmTime.value;
        selectedAlarmTimes.value.push(alarmTime);
        console.log('Alarm time:', alarmTime);
        localStorage.setItem('selectedAlarmTimes', JSON.stringify(selectedAlarmTimes.value));

        setTimeout(() => {
        alert('Alarm! Time to wake up!');
        }, totalMilliseconds);
    } else {
        alert('Please set a valid alarm time.');
    }
  };
  
  const removeAlarm = (index) => {
    selectedAlarmTimes.value.splice(index, 1);
    localStorage.setItem('selectedAlarmTimes', JSON.stringify(selectedAlarmTimes.value));
  };
  const formattedAlarmTime = computed(() => {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const enteredHours = hours.value;
    const enteredMinutes = minutes.value;

    const isFutureTime = enteredHours > currentHours || (enteredHours === currentHours && enteredMinutes > currentMinutes);

    const period = isFutureTime ? 'AM' : 'PM';

    const formattedHours = enteredHours.toString().padStart(2, '0');
    const formattedMinutes = enteredMinutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes} ${period}`;
  });
  
  const updateClock = () => {
    const now = new Date();
    const currentHours = now.getHours().toString().padStart(2, '0');
    const currentMinutes = now.getMinutes().toString().padStart(2, '0');
    const currentSeconds = now.getSeconds().toString().padStart(2, '0');

    currentTime.value = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    amOrPm.value = currentHours < 12 ? 'AM' : 'PM';
  };

  const getStoredAlarmTimes = () => {
    const storedTimes = localStorage.getItem('selectedAlarmTimes');
    return storedTimes ? JSON.parse(storedTimes) : null;
  };

  const formatAlarmTime = (alarmTime) => {
    const [enteredHours, enteredMinutes] = alarmTime.split(':').map(entry => parseInt(entry, 10));

    if (!isNaN(enteredHours) && !isNaN(enteredMinutes)) {
        const alarmDate = new Date();

        alarmDate.setHours(enteredHours);
        alarmDate.setMinutes(enteredMinutes);

        const formattedHours = alarmDate.getHours().toString().padStart(2, '0');
        const formattedMinutes = alarmDate.getMinutes().toString().padStart(2, '0');
        const period = alarmDate.getHours() < 12 ? 'AM' : 'PM';

        return `${formattedHours}:${formattedMinutes} ${period}`;
    } else {
        return 'Invalid Time';
    }
  }

  onMounted(() => {
    updateClock();
    setInterval(updateClock, 1000);
    selectedAlarmTimes.value = getStoredAlarmTimes() || [];
  });
   
  </script>
  
  <style scoped>
   .backdrop{
    border: 1px solid #24c2ab;
    background-color: #141927;
  }

  .overflow-y-scroll::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
  .overflow-y-scroll:hover::-webkit-scrollbar {
    display: block;
  }
  .overflow-y-scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .overflow-y-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(8, 47, 73, 1);
    border-radius: 8px;
    width: 4px;
  } 
  </style>