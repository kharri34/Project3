<template>
    <div class="aerobics">
      <h1 class="page-title">Back Workouts</h1>
  
      <!-- Beginner Category -->
      <section class="category">
        <h2 class="category-title">Beginner</h2>
        <div class="workout">
          <div class="workout-image">
           <img src="@/assets/s.gif" alt="Beginner Workout" />
          </div>
          <div class="workout-details">
            <h3 class="workout-name">Superman Exercise</h3>
            <p class="workout-description">
              Lie on your stomach and lift your arms and legs off the ground to engage your lower back muscles.
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
            <img src="@/assets/dbor.gif" alt="Intermediate Workout" />
          </div>
          <div class="workout-details">
            <h3 class="workout-name">Bent-Over Dumbbell Rows</h3>
            <p class="workout-description">
              Hold a dumbbell in each hand and pull them towards your waist, working the lats and mid-back.
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
            <img src="@/assets/pullup.gif" alt="Advanced Workout" />
          </div>
          <div class="workout-details">
            <h3 class="workout-name">Pull-Ups</h3>
            <p class="workout-description">
              Using a pull-up bar, this bodyweight exercise targets the upper back, lats, and biceps, requiring significant strength.
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
  