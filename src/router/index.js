import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
import Home from '../components/Home.vue';
import WorkoutLibrary from '../components/WorkoutLibrary.vue';
import Core from "../components/categories/Core.vue";
import Aerobics from "../components/categories/Aerobics.vue";
import Arms from "../components/categories/Arms.vue";
import Back from "../components/categories/Back.vue";
import Chest from "../components/categories/Chest.vue";
import Legs from "../components/categories/Legs.vue";
import Shoulders from "../components/categories/Shoulders.vue";
import Timer from '@/components/Timer.vue';
//import exercise from '@/components/exercise.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/workoutlibrary', name: 'WorkoutLibrary', component:WorkoutLibrary },
    { path: "/core", name: "Core", component: Core },
    { path: "/aerobics", name: "Aerobics", component: Aerobics },
    { path: "/back", name: "Back", component: Back },
    { path: "/arms", name: "Arms", component: Arms },
    { path: "/chest", name: "Chest", component: Chest },
    { path: "/legs", name: "Legs", component: Legs },
    { path: "/shoulders", name: "Shoulders", component: Shoulders },
    { path: '/', component: Home },  
    { path: '/timer', component: Timer },  
    

      
=======
import Home from "../components/Home.vue";
import WorkoutLibrary from "../components/WorkoutLibrary.vue";
import Category from '../components/Category.vue';
import Timer from '../components/Timer.vue';
import Workout from '../components/Workout.vue';

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/workoutlibrary", name: "WorkoutLibrary", component: WorkoutLibrary },
    { path: "/timer-app", name: "Timer", component: Timer },

    {
        path: '/:category',
        name: 'Category',
        component: Category,
        props: route => {
            const category = route.params.category.toLowerCase();
            const workoutLinks = [
                { id: 1, name: 'Beginner', path: `/${category}/beginner` },
                { id: 2, name: 'Intermediate', path: `/${category}/intermediate` },
                { id: 3, name: 'Advanced', path: `/${category}/advanced` },
            ];
            return {
                category: category.charAt(0).toUpperCase() + category.slice(1), 
                workouts: workoutLinks,
            };
        },
    },

    {
        path: '/:category/:level',
        name: 'Workout',
        component: Workout,
        props: route => ({
            category: route.params.category.charAt(0).toUpperCase() + route.params.category.slice(1),
            level: route.params.level.charAt(0).toUpperCase() + route.params.level.slice(1),
        }),
    },
>>>>>>> 04a04c56d18a5dca4e206b27ff0202930dad8be8
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
