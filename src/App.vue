<template>
    <div :class="pageClass" id="app">
        <nav :class="navClass">
                <router-link to="/" class="box bar">Home</router-link>
                <router-link to="/workoutlibrary" class="box bar">Workout Library</router-link>
                <router-link to="/Timer" class="box bar">Timer</router-link>
                
        </nav>
        <div style="flex:1; display: flex; flex-direction: column;">
            <router-view />
        </div>
    </div>
</template>

<script>
export default{
    computed: {
        pageClass() {
            if (this.$route.path === "/") return "background-home";
            if (this.$route.path === "/workoutlibrary") return "background-workout";
            if (this.isCategory) return "background-category";
            return "background-default";
        },
        navClass() {
            if (this.isCategory) return "nav-category";
            if (this.$route.path === "/") return "nav-home";
            return "nav-default";
        },
        isCategory() {
            const categoryPaths = ["/aerobics", "/arms", "/back", "/chest", "/core", "/legs",
            "/shoulders", "/stretches", "/fullbody",
            ];
            return categoryPaths.includes(this.$route.path);
        },
    },
};
</script>

<style>
#app {
    background-color: var(--color-background);
    min-height: 100vh;
    width: 100%;
    transition: background-color 0.5s ease, background-image 0.5s ease;
}

nav {
    font-family: "Josefin Sans", sans-serif;
    background-color: var(--color-background);
    padding: 1rem;
    color: #fff;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.5s ease;
}

nav a {
  text-decoration: none;
  color: grey;
  font-weight: bold;
}

nav a:hover {
  color: white;
}

.background-home {
    --color-background: rgba(31, 33, 30, 0.8);
    background-image: url('@/assets/green.jpg');
    background-size: cover;
    background-position: center;
    --link-gradient: linear-gradient(0.25turn, #f3d098, #b6915d, #a77e4a);
}

.background-workout {
    --color-background: rgba(31, 33, 30, 0.8);
    background-image: url('@/assets/green2.jpg');
    background-size: cover;
    background-position: center;
    --link-gradient: linear-gradient(0.25turn, #ffd054, #fce1a4, #b28031, #895724, #6e3c1b);
}

.background-category {
    --color-background: var(--vt-c-category-background);
    --link-gradient: linear-gradient(0.25turn, #ffffff, #c0c0c0, #808080, #606060, #505050);
}

.background-default {
    --color-background: var(--vt-c-default-background);
}

.nav-category {
    background-color: black;
}

.nav-default {
    background-color: rgba(31, 33, 30, 0.606);
}

.box {
    position: relative;
    vertical-align: middle;
    display: inline-block;
    height: 40px;
    text-align: center;
    transition: 0.5s;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid transparent;
    -webkit-transition: 0.5s;
    overflow: hidden;
}

.box:hover {
    border: 1px solid rgba(0, 160, 80, 0);
}

.bar::before,
.bar::after {
    width: 100%;
    height: 100%;
    z-index:3;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    -webkit-transform: scale(0);
    transition:0.5s;
}

.bar::before {
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  -webkit-transform-origin: 100% 0%;
}


.bar::after {
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    -webkit-transform-origin: 0% 100%;
}

.box.bar:hover::before,
.box.bar:hover::after {
  -webkit-transform: scale(1);
  border-color: transparent;
  border-image: var(--link-gradient) 1;
}
</style>