<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/timer">Timer</router-link> 
        <router-link to="/workoutlibrary">Workout Library</router-link>
        <router-link to="/exerices">Premade Workout</router-link>
      </nav>
      <div>
        <router-view /> <!-- This is where the components will show up based on the route -->
      </div>
    </div>
  </template>
  
  <script>
  import Home from './components/Home.vue';
  import Timer from './components/Timer.vue';
  
  export default {
    name: 'App',
    components: {
      Home,
      Timer,
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  