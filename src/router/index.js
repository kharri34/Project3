import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import WorkoutLibrary from '../components/WorkoutLibrary.vue';
import Timer from '../components/Timer.vue';
import Category from '../components/Category.vue';
import Workout from '../components/Workout.vue';



const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/workoutlibrary", name: "WorkoutLibrary", component: WorkoutLibrary },
    { path: "/timer", name: "Timer", component: Timer },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
