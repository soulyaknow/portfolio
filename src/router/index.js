import { createRouter, createWebHistory } from 'vue-router';
import TodoApp from '../components/TodoApp.vue'
import AppsPage from '../views/AppsPage.vue';
import HomePage from '../views/HomePage.vue'
import AlarmClockApp from '../components/AlarmClockApp.vue'
import ChatApp from '../components/ChatApp.vue'
import Register from '../components/RegisterComponent.vue'

const routes = [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/todoapp',
      name: 'Todoapp',
      component: TodoApp
    },
    {
      path: '/apps',
      name: 'AppsPage',
      component: AppsPage 
    },
    {
      path: '/alarmclockapp',
      name: 'Alarmclockapp',
      component: AlarmClockApp 
    },
    {
      path: '/chatapp',
      name: 'Chatapp',
      component: ChatApp 
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register 
    },

  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router
  