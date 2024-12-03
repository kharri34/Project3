<template>
    <div class="workout-routine">
      <h1>Workout Routine</h1>
      <ul>
        <li v-for="(exercise, index) in exercises" :key="index" class="exercise">
          <h3>{{ exercise.name }}</h3>
          <Timer 
            :duration="exercise.duration" 
            :title="exercise.name" 
            @finished="onTimerFinished(index)" 
          />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import Timer from './Timer.vue';
  
  export default {
    components: { Timer },
    data() {
      return {
        exercises: [
          { name: "Push-Ups", duration: 60 },
          { name: "Squats", duration: 45 },
          { name: "Plank", duration: 90 },
        ],
      };
    },
    methods: {
      onTimerFinished(index) {
        alert(`${this.exercises[index].name} completed!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .workout-routine {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .exercise {
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  h3 {
    margin: 5px 0;
  }
  </style>
  