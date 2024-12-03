<template>
    <div class="category">
      <h1>Legs Workouts</h1>
      <ul>
        <li v-for="workout in workouts" :key="workout.id">
          <h2>{{ workout.name }}</h2>
          <p>{{ workout.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        workouts: [
          { id: 1, name: 'Bicep Curls', description: 'Focuses on the biceps.' },
          { id: 2, name: 'Tricep Dips', description: 'Strengthens triceps and shoulders.' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .category {
    text-align: center;
    padding: 20px;
  }
  .category-image {
    width: 100%;
    max-width: 400px;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  