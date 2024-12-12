import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import WorkoutLibrary from '../components/WorkoutLibrary.vue';
import Timer from '../components/Timer.vue';
import Category from '../components/Category.vue';
import Workout from '../components/Workout.vue';
import Aerobic from '@/components/Categories/Aerobic.vue';
import Chest from '@/components/Categories/Chest.vue';
import Legs from '@/components/Categories/Legs.vue';
import Arms from '@/components/Categories/Arms.vue';
import Core from '@/components/Categories/Core.vue';
import Shoulders from '@/components/Categories/Shoulders.vue';
import Back from '@/components/Categories/Back.vue';
import Fullbody from '@/components/Categories/Fullbody.vue';
import Stretches from '@/components/Categories/Stretches.vue';
import Levels from '@/components/Levels.vue';

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/workoutlibrary", name: "WorkoutLibrary", component: WorkoutLibrary },
    { path: "/timer", name: "Timer", component: Timer },
    { path: "/aerobics", name: "Aerobics", component: Aerobic },
    { path: "/chest", name: "Chests", component: Chest },
    { path: "/legs", name: "Legs", component: Legs },
    { path: "/arms", name: "Arms", component: Arms },
    { path: "/core", name: "Core", component: Core },
    { path: "/shoulders", name: "Shoulders", component: Shoulders },
    { path: "/back", name: "Back", component: Back },
    { path: "/fullbody", name: "Fullbody", component: Fullbody },
    { path: "/stretches", name: "Stretches", component: Stretches },
    { path: "/levels", name: "Levels", component: Levels },


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

    {
        path: "/aerobics",
        name: "AerobicBeginner",
        component: Aerobic,
        props: true
    },
  
      
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
