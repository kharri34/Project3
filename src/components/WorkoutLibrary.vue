<template>
    <div class = "workoutlibrary">
        <h1 class="shadow-text">Workout Library</h1>
        <div class="categories">
            <router-link to="/aerobics" class="category-card">Aerobic Workouts</router-link>
            <router-link to="/arms" class="category-card">Arm Workouts</router-link>
            <router-link to="/back" class="category-card">Back Workouts</router-link>
            <router-link to="/Chest" class="category-card">Chest Workouts</router-link>
            <router-link to="/core" class="category-card">Core Workouts</router-link>
            <router-link to="/legs" class="category-card">Leg Workouts</router-link>
            <router-link to="/shoulders" class="category-card">Shoulder Workouts</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.workoutlibrary {
    background-color:black;
    text-align: center;
    color: silver;
    font-weight: bold;
    height: 100vh;
    padding:20px;
}

h1 {
    position: relative;
    margin: 0;
    padding: 10px;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(0.25turn, rgb(228, 213, 171), rgb(233, 210, 147), rgb(237, 204, 113), rgb(238, 192, 64), rgb(240, 179, 11));
    border-image-slice: 1;
}

.shadow-text { 
  color: #fff;
  text-shadow: 
    1px 1px 0 #000, 
    2px 2px 0 #333, 
    3px 3px 0 #666, 
    4px 4px 0 #999; 
}

.categories {
    display: flex;
    flex-direction: column; 
    gap: 20px; 
    justify-content: center;
    padding: 10px;
    background-color: black;
    border-radius: 10px;
    height: calc(100vh - 80px);
    overflow: hidden; 
}

.category-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    text-decoration: none;
    font-size: 1.0rem;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
                 -2px -2px 4px rgba(0, 0, 0, 0.8);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 10px;
    box-shadow: inset -3px -3px 5px rgba(255, 255, 255, 0.3),
                inset 3px 3px 5px rgba(0, 0, 0, 0.4),
                3px 3px 8px rgba(0, 0, 0, 0.6);
    background: linear-gradient(145deg, #d4af37, #ffd700, #b8860b); /* Metallic gold gradient */
    transition: transform 0.3s, box-shadow 0.3s;
 
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.4),
                inset 4px 4px 6px rgba(0, 0, 0, 0.5),
                4px 6px 12px rgba(255, 223, 0, 0.7);
}

.category-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.2), transparent 70%);
    border-radius: 10px;
    pointer-events: none;
}
</style>