<template>
    <div class="h-screen w-screen">
        <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
        <div class="md:mt-28 mt-20 md:p-10 w-screen flex md:h-[44.3rem] h-[36.3rem] align-center">
            <!--login form -->
            <div class="md:w-[20rem] md:h-[35.3rem] md:mt-[25px] md:rounded-2xl md:ml-[580px] h-[480px] w-full mt-24" 
            v-if="state.username == '' || state.username == null || state.id == '' || state.id == null">
                <div class="w-full transparent rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center mb-10 font-poppins">
                            Login to Public Chat
                        </h1>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="Login">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-white dark:text-white font-poppins">Username</label>
                                <input type="text" v-model="inputUserName" class="bg-gray-50 border font-poppins border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                 placeholder="Username" required>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                <input type="password"  v-model="inputUserPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                            <p class="text-sm font-light text-white text-center">
                                Don’t have an account yet?
                                <router-link to="/reg" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up
                                </router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <!--chat message-->
            <div class="flex md:ml-auto md:h-[35.3rem] h-[550px] flex-col bg-gray-100 mx-auto my-auto" v-else>
                <div class="bg-gradient-to-r from-blue-500 to-sky-500 py-4">
                    <h1 class="text-center text-2xl font-bold text-white">Public Chat</h1>
                </div>
                <div class="text-white bg-blue-400 py-4">
                    <h4 @click="Logout" class="cursor-pointer text-right text-red-500 pr-2">Logout</h4>
                    <p class="pl-2 text-bold">Welcome, {{state.username}}</p>
                </div>
                <div class="flex-grow h-full overflow-y-scroll chat-box" ref="chatBox">
                    <div class="flex flex-col space-y-2 px-2 pt-4" v-for="message in state.messages" :key="message.key">
                        <div class="flex items-center self-end rounded-xl rounded-tr bg-blue-500 py-2 px-3 text-white" 
                            v-if="message.username === state.username">
                            {{message.content}}
                        </div>
                        <div v-if="message.username !== state.username"
                            class="flex flex-col items-start">
                            <span>{{message.username}}</span>
                            <p class="bg-gray-300 py-2 px-3 rounded-xl rounded-tl">{{message.content}}</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center p-4">
                    <input type="text" v-model="inputMessages" placeholder="Type your message..." class="w-full rounded-lg border border-gray-300 px-4 py-2 " />
                    <button class="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white" @click="SendMessage"><i class="bi bi-send w-full"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { db } from '../firebase';
import { reactive, ref, onMounted, } from 'vue';
import NavarOnly from '../components/NavarOnly.vue';
import { collection, addDoc, query, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const inputUserName = ref('');
const inputUserPassword = ref('');
const inputMessages = ref('');
const chatBox = ref(null);

const state = reactive({
    id: "",
    username: "",
    password: "",
    messages: [],
    udata: []
})


const Login = () => {
  const userQuery = query(collection(db, "chat"));

  try {
    onSnapshot(userQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userData = {
          id: doc.id,
          username: doc.data().username,
          password: doc.data().password,
        };
        if (inputUserName.value === userData.username && inputUserPassword.value === userData.password) {
          state.id = uuidv4();
          state.username = inputUserName.value;
          state.password = inputUserPassword.value;
          inputUserName.value = "";
          inputUserPassword.value = "";
          localStorage.setItem('id', state.id);
          alert("Login Successfully!")
        }
      });
    });
    
  } catch (e) {
    console.log("There is an error", e);
  }
};

const SendMessage = async (e) => {
    e.preventDefault();
    try {
        if (inputMessages.value == '' || inputMessages.value == null) {
            return;
        }

        let currentId = localStorage.getItem('id');
        await addDoc(collection(db, 'chat'), {
            id: currentId,
            username: state.username,
            message: inputMessages.value,
            date_created: serverTimestamp(),
        });
        inputMessages.value = '';
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

const getMessages = () => {
    const fsquery = query(collection(db, "chat"), orderBy('date_created','asc'));
      onSnapshot(fsquery,(querySnapshot) => {
        const message = [];
        querySnapshot.forEach((doc) => {
          const mess = {
              id:doc.id,
              content:doc.data().message,
              username:doc.data().username,
            }
            message.push(mess);
        });
        state.messages=message;
      })
}

const Logout = () => {
    state.username = "";
    state.password = "";
    localStorage.clear();
}

onMounted(()=> {
    getMessages();
})
</script>
<style scoped>
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