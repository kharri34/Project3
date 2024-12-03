<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/workoutlibrary">Workout Library</router-link>
            <router-link to="/Exerices">Premade Workout</router-link>
            <router-link to="/Timer">Timer</router-link>
        </nav>
        <div style="flex:1; display: flex; flex-direction: column;">
            <router-view />
        </div>
    </div>
</template>

<script>
export default{
    name: 'App'
}
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

nav a {
  text-decoration: none;
  color: grey;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
  color: goldenrod;
  background-color: white;
}

#app > div {
    flex-grow:1;
}
</style>
  