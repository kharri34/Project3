import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import WorkoutLibrary from '../components/WorkoutLibrary.vue';
import Timer from '../components/Timer.vue';
import Aerobic from '@/components/Categories/Aerobic.vue';
import Chest from '@/components/Categories/Chest.vue';
import Legs from '@/components/Categories/Legs.vue';
import Arms from '@/components/Categories/Arms.vue';
import Core from '@/components/Categories/Core.vue';
import Shoulders from '@/components/Categories/Shoulders.vue';
import Back from '@/components/Categories/Back.vue';
import Fullbody from '@/components/Categories/Fullbody.vue';
import Stretches from '@/components/Categories/Stretches.vue';

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
