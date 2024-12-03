import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import WorkoutLibrary from '../components/WorkoutLibrary.vue';
import Core from "../components/categories/Core.vue";
import Aerobics from "../components/categories/Aerobics.vue";
import Arms from "../components/categories/Arms.vue";
import Back from "../components/categories/Back.vue";
import Chest from "../components/categories/Chest.vue";
import Fullbody from "../components/categories/Fullbody.vue";
import Legs from "../components/categories/Legs.vue";
import Shoulders from "../components/categories/Shoulders.vue";
import Stretches from "../components/categories/Stretches.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/workoutlibrary', name: 'WorkoutLibrary', component:WorkoutLibrary },
    { path: "/core", name: "Core", component: Core },
    { path: "/aerobics", name: "Aerobics", component: Aerobics },
    { path: "/back", name: "Back", component: Back },
    { path: "/arms", name: "Arms", component: Arms },
    { path: "/chest", name: "Chest", component: Chest },
    { path: "/fullbody", name: "Fullbody", component: Fullbody},
    { path: "/legs", name: "Legs", component: Legs },
    { path: "/shoulders", name: "Shoulders", component: Shoulders },
    { path: "/shoulders", name: "Shoulders", component: Shoulders },
    { path: "/stretches", name: "Stretches", component: Stretches },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;