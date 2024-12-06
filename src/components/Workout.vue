<template>
    <div class="workout">
        <h1>{{ level }} {{ category }} Workout</h1>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
}

p {
    text-align: center;
    font-size: 1.2rem;
}
</style>
