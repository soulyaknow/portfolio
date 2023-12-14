<template>
  <div class="h-screen w-screen">
    <NavarOnly class="md:h-28 h-20 bg-sky-950 fixed w-full z-20 top-0 start-0"/>
      <div class="md:mt-28 mt-20 md:p-10 w-screen flex md:h-[44.3rem] h-[36.3rem]">
        <div class="md:w-[45rem] md:h-[35.3rem] md:mt-[25px] md:rounded-2xl md:ml-[380px] h-[480px] w-full mt-24">
          <h1 class="bg-green-400 w-full text-white text-center h-10 pt-2  md:rounded-t-2xl text-[20px]">Todo App</h1>
          <div class="flex mt-4">
            <input type="text" v-model="task" required class="shadow appearance-none border rounded
             w-full py-2 px-3 mr-4 text-grey-darker ml-2 text-center" placeholder="Add Todo">
            <button class="flex-no-shrink border-2 rounded text-teal border-teal hover:text-white hover:bg-teal mr-2 bg-green-400 text-gray-500 w-10 text-[20px] h-10" @click="addTask">+</button>
          </div>
          <div class="flex flex-col items-center my-4">
            <i class="bi bi-search text-white"><input type="text" placeholder="Search task" id="search" v-model="searchQuery" class="ml-2 border-b rounded-2xl text-center"></i>     
          </div>
          <div class="relative shadow-md mt-2 overflow-y-scroll md:max-h-[55%] max-h-[240px]">
            <table class="ml-2 md:w-[98%] w-[96%] text-sm text-left overflow-hidden rtl:text-right text-gray-500 dark:text-gray-400 rounded-2xl">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Details
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-slate-300 text-slate-600 odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b
                 dark:border-gray-700 text-center text-bold" v-for="todo in filteredTodos" :key="todo.id">
                  <th scope="row" class="px-4 py-2 font-medium whitespace-nowrap dark:text-white">
                    <p :class="{ check: todo.status  }">{{ capitalizeFirstLetter(todo.details) }}</p>
                  </th>
                  <td class="px-4 py-2">
                    <a href="#" class="font-medium hover:underline pr-2" @click="updateData(todo.id, todo.status)"><i class="bi bi-check-circle"></i></a>
                    <a href="#" class="font-medium hover:underline" @click="removeTask(todo.id)"><i class="bi bi-trash3"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex md:mt-2 ">
            <button class="flex-no-shrink border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500 mx-2 md:mt-0 mt-2
             bg-green-400 text-gray-500 w-full text-[20px] h-10 md:mb-0 mb-2" v-if="hasTasks" @click="clearAllTasks">
              Clear Task
            </button>
          </div>
        </div>
    </div>
  </div>
</template>
  <script setup>
    import { ref, onMounted, computed } from 'vue';
    import NavarOnly from '../components/NavarOnly.vue';
    import { db } from '../firebase';
    import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore';

    const task = ref('');
    const todos = ref([]);
    const searchQuery = ref('');
    const status = ref(false);
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const addTask = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, 'todo'), {
          details: task.value,
          status: status.value,
          date_created: serverTimestamp(),
        });
        task.value = '';
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };

    const getData = () => {
      const fsquery = query(collection(db, "todo"), orderBy('date_created','asc'));
      onSnapshot(fsquery,(querySnapshot) => {
        const newTasks = [];
        querySnapshot.forEach((doc) => {
          const datas = {
              id:doc.id,
              details:doc.data().details,
              status:doc.data().status,
            }
            newTasks.unshift(datas);
        });
        todos.value=newTasks;
      })
    };

    const updateData = (id, currentStatus) => {
      const fsquery = doc(db, 'todo', id);
      const newData = {
        status: !currentStatus,
      }
      updateDoc(fsquery, newData)
      .then(() => {
        console.log('Document successfully updated.');
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });
    };
    
    const removeTask = async (id) => {
      try{
        await deleteDoc(doc(db,'todo',id))
      }catch(e){
        console.log(e);
      }
    };

    const hasTasks = computed(()=> {
      return todos.value.length > 0;
    });

    const clearAllTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'todo'));
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        todos.value = [];
      } catch (e) {
        console.log(e);
      }
    };

    const filteredTodos = computed(()=> {
      return todos.value.filter(todo => {
        return todo.details.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    });

    onMounted(()=> {
      getData()
    })
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
  .check {
    text-decoration: line-through;
    color: rgb(1, 68, 1);
  }
  </style>