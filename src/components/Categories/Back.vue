<template>
  <div class="back">
    <section class="page-title-wrapper">
      <div class="page-title-top">Back</div>
      <div class="page-title-bottom" aria-hidden="true">Back</div>
    </section>

    <!-- Beginner Category -->
    <section class="category">
      <h2 class="category-title">Beginner</h2>
      <div class="workout">
        <div class="workout-image">
          <img src="@/assets/Exercise Images/Back Images/s.gif" alt="Beginner Workout" />
        </div>
        <div class="workout-details">
          <h3 class="workout-name">Superman Exercise</h3>
          <p class="workout-description">
            Lie on your stomach and lift your arms and legs off the ground to engage your lower back muscles.
          </p>
        </div>
      </div>
    </section>

    <!-- Intermediate Category -->
    <section class="category">
      <h2 class="category-title">Intermediate</h2>
      <div class="workout">
        <div class="workout-image">
          <img src="@/assets/Exercise Images/Back Images/dbor.gif" alt="Intermediate Workout" />
        </div>
        <div class="workout-details">
          <h3 class="workout-name">Bent-Over Dumbbell Rows</h3>
          <p class="workout-description">
            Hold a dumbbell in each hand and pull them towards your waist, working the lats and mid-back.
          </p>
        </div>
      </div>
    </section>

    <!-- Advanced Category -->
    <section class="category">
      <h2 class="category-title">Advanced</h2>
      <div class="workout">
        <div class="workout-image">
          <img src="@/assets/Exercise Images/Back Images/pullup.gif" alt="Advanced Workout" />
        </div>
        <div class="workout-details">
          <h3 class="workout-name">Pull-Ups</h3>
          <p class="workout-description">
            Using a pull-up bar, this bodyweight exercise targets the upper back, lats, and biceps, requiring
            significant strength.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Back',
};
</script>

<style scoped>
.back {
  padding: 20px;
  background-color: black;
}

.page-title-wrapper {
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  font-family: "Oswald", sans-serif;
  height: 5rem;
}

.page-title-wrapper {
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  font-family: "Oswald", sans-serif;
  height: 5rem;
}

.page-title-top,
.page-title-bottom {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  font-size: clamp(1rem, 1rem + 8vw, 5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
  text-align: center;
}

.page-title-top {
  clip-path: polygon(-20% 100%, 100% 0%, 0% 0%, 0% 100%);
  z-index: 2;
}

.page-title-bottom {
  clip-path: polygon(-15% 100%, 100% 5%, 100% 100%, 0% 100%);
  color: transparent;
  background: linear-gradient(176deg, black 47%, hsl(0, 0%, 100%) 60%);
  background-clip: text;
  -webkit-background-clip: text;
  transform: translateX(-0.02em);
  z-index: 1;
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
  font-family: 'Oswald', sans-serif;
  color: black;
  font-weight: 800;
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  flex-direction: column;
}

.workout-name {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 10px;
}

.workout-description {
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
}
</style>