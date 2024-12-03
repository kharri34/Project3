<template>
    <div class="category">
        <h1>{{ category }} Workouts</h1>
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
    },
};
</script>

<style scoped>
.category {
    text-align: center;
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 20px 0;
    background:black;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px, rgba(0, 0, 0, 0.1);
}
</style>