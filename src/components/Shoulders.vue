<template>
    <div class="aerobics">
      <h1 class="page-title">Shoulder Workouts</h1>
  
      <!-- Beginner Category -->
      <section class="category">
        <h2 class="category-title">Beginner</h2>
        <div class="workout">
          <div class="workout-image">
           <img src="@/assets/ac.gif" alt="Beginner Workout" />
          </div>
          <div class="workout-details">
            <h3 class="workout-name">Arm Circles</h3>
            <p class="workout-description">
              Small or large circles with arms extended to warm up and activate shoulder muscles.
            </p>
            <!-- Add a link or button to start the workout -->
            <!-- <router-link to="/aerobics/beginner" class="start-workout-btn">Start Beginner Workout</router-link> -->
          </div>
        </div>
      </section>
  
      <!-- Intermediate Category -->
      <section class="category">
        <h2 class="category-title">Intermediate</h2>
        <div class="workout">
          <div class="workout-image">
            <img src="@/assets/dsp.gif" alt="Intermediate Workout" />
          </div>
          <div class="workout-details">
            <h3 class="workout-name">Dumbbell Shoulder Press</h3>
            <p class="workout-description">
              Press dumbbells overhead to target the deltoids and upper arms.
            </p>
            <!-- Add a link or button to start the workout -->
            <!-- <router-link to="/aerobics/intermediate" class="start-workout-btn">Start Intermediate Workout</router-link> -->
          </div>
        </div>
      </section>
  
      <!-- Advanced Category -->
      <section class="category">
        <h2 class="category-title">Advanced</h2>
        <div class="workout">
          <div class="workout-image">
            <img src="@/assets/asp.gif" alt="Advanced Workout" />
          </div>
          <div class="workout-details">
            <h3 class="workout-name">Arnold Press</h3>
            <p class="workout-description">
              A variation of the dumbbell shoulder press that incorporates a rotation to fully engage the shoulders.
            </p>
            <!-- Add a link or button to start the workout -->
            <!--<router-link to="/aerobics/advanced" class="start-workout-btn">Start Advanced Workout</router-link> -->
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Aerobics',
  };
  </script>
  
  <style scoped>
  .aerobics {
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 40px;
  }
  
  .category {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    padding: 20px;
  }
  
  .category-title {
    font-size: 2rem;
    color: #333;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  
  .workout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
  
  .workout-image img {
    max-width: 100%;
    border-radius: 10px;
  }
  
  .workout-details {
    display: flex;
    flex-direction: column;
  }
  
  .workout-name {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 10px;
  }
  
  .workout-description {
    font-size: 1rem;
    color: #777;
    margin-bottom: 20px;
  }
  
  .start-workout-btn {
    padding: 10px 20px;
    background-color: #6e3c1b;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    transition: background-color 0.3s;
  }
  
  .start-workout-btn:hover {
    background-color: #895724;
  }
  </style>
  