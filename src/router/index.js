import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Home.vue";
import WorkoutLibrary from "../components/WorkoutLibrary.vue";
import Category from '../components/Category.vue';
import Timer from '@/components/Timer.vue';


const routes = [
    { path: "/", name: "Home", component: Home},
    { path: "/workoutlibrary", name: "WorkoutLibrary", component: WorkoutLibrary},
    { path: "/timer", name: "Timer", component: Timer},
    {
        path: '/aerobics',
        component: Category,
        props: {
            category: 'Aerobics',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/arms',
        component: Category,
        props: {
            category: 'Arms',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/back',
        component: Category,
        props: {
            category: 'Back',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/chest',
        component: Category,
        props: {
            category: 'Chest',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/core',
        component: Category,
        props: {
            category: 'Core',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/legs',
        component: Category,
        props: {
            category: 'Legs',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/shoulders',
        component: Category,
        props: {
            category: 'Shoulders',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/stretches',
        component: Category,
        props: {
            category: 'Stretches',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
    {
        path: '/fullbody',
        component: Category,
        props: {
            category: 'FullBody',
            workouts: [
                {id: 1, name: 'Jumping Jacks', description: 'cardio'},
                { id: 2, name: 'Mountain Climbers', description: 'Intense full-body cardio workout.' },
            ],
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;