<template>
    <div class="h-screen w-screen">
        <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
        <div class="md:mt-28 mt-20 md:p-10 w-screen flex md:h-[44.3rem] h-[36.3rem] align-center">
            <div class="md:w-[20rem] md:h-[35.3rem] md:mt-[25px] md:rounded-2xl md:ml-[580px] h-[480px] w-full mt-24">
                <div class="w-full transparent rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center mb-10 font-poppins">
                            Register to Public Chat
                        </h1>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="Register">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-white dark:text-white font-poppins">Username</label>
                                <input type="text" v-model="username" class="bg-gray-50 border font-poppins border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                 placeholder="Username" required>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                <input type="password"  v-model="userpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                            <p class="text-sm font-light text-white">
                                Already have an account? 
                                <router-link to="/chatapp" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign In
                                </router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { db } from '../firebase';
import { ref } from 'vue';
import NavarOnly from '../components/NavarOnly.vue';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const username = ref('');
const userpassword = ref('');


const Register = async (e) => {
    e.preventDefault();
    try {
        if (username.value == '' || username.value == null && userpassword.value == '' || userpassword.value == null) {
            return;
        }
        await addDoc(collection(db, 'chat'), {
            id: uuidv4(),
            username: username.value,
            password: userpassword.value,
            message: `${username.value} is online!`,
            date_created: serverTimestamp(),
        });
        alert("Succcessfully Created!");
    } catch (e) {
        console.error('Unsuccessfully Created!: ', e);
    }
}
</script>
<style scoped>
</style>