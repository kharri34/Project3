<template>
    <div class="category-page">
        <section class="wrapper">
            <div class="top">{{ category }}</div>
            <div class="bottom" aria-hidden="true">{{ category }}</div>
        </section>
        <ul>
            <li v-for="workout in workouts" :key="workout.id">
                <h2> {{ workout.name }}</h2>
                <p> {{ workout.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            required: true,
        },
        workouts: {
            type: Array,
            required: true,
        },
    }
};
</script>

<style scoped>
.category-page {
    background-color: black;
}

* {
    box-sizing: border-box;
}

.wrapper {
    position:relative;
    height: auto;
    padding: 20px;
    font-family: "Oswald", sans-serif;
    font-size: clamp(1rem, 1rem + 8vw, 5rem);
    font-weight: 700;
    text-transform: uppercase;
    color: hsl(0, 0%, 100%);
}

.wrapper > div {
    position: absolute;
    width:100%;
    text-align: center;
}

.top {
    clip-path: polygon(-20% 100%, 100% 0%, 0% 0%, 0% 100%);
}

.bottom {
    clip-path: polygon(-15% 100%, 100% 5%, 100% 100%, 0% 100%);
    color: transparent;
    background: linear-gradient(176deg, black 47%, hsl(0, 0%, 100%) 60%);
    background-clip: text;
    -webkit-background-clip: text;
    transform: translateX(-0.02em);
}

ul {
    list-style: none;
    padding: 100px 0 0 0;
    margin: 0;
}

li {
    margin: 20px 0;
    background:#2b3936;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px, rgba(0, 0, 0, 0.1);
}
</style>