import { createRouter, createWebHistory } from 'vue-router';
import TodoApp from '../components/TodoApp.vue'
import AppsPage from '../views/AppsPage.vue';
import HomePage from '../views/HomePage.vue'
import AlarmClockApp from '../components/AlarmClockApp.vue'

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

  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router
  