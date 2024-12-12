<template>
    <div class="premade-workout">
      <h1 class="title">Full Body Workout</h1>
  
      <!-- Workout Instructions -->
      <div class="workout-intro">
        <p>Get ready to work your entire body with this comprehensive workout plan! Follow the exercises below to build strength, endurance, and flexibility.</p>
      </div>
  
      <!-- Loop through exercises and display them -->
       <!-- hi-->
      <div v-for="(exercise, index) in exercises" :key="index" class="exercise-card">
        <h2 class="exercise-title">{{ exercise.name }}</h2>
        <img :src="exercise.image" alt="Image of {{ exercise.name }}" class="exercise-image"/>
        <p class="exercise-description">{{ exercise.description }}</p>
        <div class="exercise-details">
          <p><strong>Sets:</strong> {{ exercise.sets }}</p>
          <p><strong>Reps:</strong> {{ exercise.reps }}</p>
          <p><strong>Duration:</strong> {{ exercise.duration }}</p>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'PremadeWorkout',
    data() {
      return {
        exercises: [
          {
            name: 'Jumping Jacks',
            image: require('@/assets/jumping-jacks.jpg'),
            description: 'A great full-body warm-up that increases heart rate and prepares the muscles for exercise.',
            sets: 3,
            reps: 30,
            duration: '30 seconds'
          },
          {
            name: 'Push-Ups',
            image: require('@/assets/push-ups.jpg'),
            description: 'Build upper body strength with this classic chest, shoulder, and tricep exercise.',
            sets: 3,
            reps: 15,
            duration: 'N/A'
          },
          {
            name: 'Bodyweight Squats',
            image: require('@/assets/squats.jpg'),
            description: 'This lower-body exercise targets the quads, hamstrings, and glutes.',
            sets: 3,
            reps: 20,
            duration: 'N/A'
          },
          {
            name: 'Plank Hold',
            image: require('@/assets/plank.jpg'),
            description: 'Improve core stability with a classic plank hold. Keep your back straight and abs tight.',
            sets: 3,
            reps: 'N/A',
            duration: '60 seconds'
          },
          {
            name: 'Burpees',
            image: require('@/assets/burpees.jpg'),
            description: 'This full-body movement increases heart rate and builds strength and power.',
            sets: 3,
            reps: 10,
            duration: 'N/A'
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* General Page Layout */
  .premade-workout {
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .workout-intro {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .exercise-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }
  
  .exercise-card:hover {
    transform: scale(1.02);
  }
  
  .exercise-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #555;
  }
  
  .exercise-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 15px;
  }
  
  .exercise-description {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .exercise-details {
    background-color: #ececec;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .exercise-details p {
    margin: 0;
  }
  </style>
  