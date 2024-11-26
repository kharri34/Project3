<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/workoutlibrary">Workout Library</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
nav {
    padding: 10px;
    display: flex;
    gap: 15px;
    justify-content: left;
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
</style>