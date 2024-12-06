<template>
  <div class="exercise-page">
    <h1>Select a Body Part</h1>
    <div class="body-map">
      <img src="https://via.placeholder.com/400x600" alt="Human Body Diagram" class="body-diagram" />
      <!-- Example clickable body part -->
      <div class="body-part" style="top: 30%; left: 40%;" @click="selectBodyPart('Chest')">
        Chest
      </div>
      <div class="body-part" style="top: 50%; left: 30%;" @click="selectBodyPart('Legs')">
        Legs
      </div>
      <div class="body-part" style="top: 40%; left: 60%;" @click="selectBodyPart('Arms')">
        Arms
      </div>
    </div>

    <div v-if="selectedBodyPart" class="exercises-list">
      <h2>{{ selectedBodyPart }} Exercises</h2>
      <ul>
        <li v-for="(exercise, index) in exercises" :key="index" class="exercise-item">
          <h3>{{ exercise.name }}</h3>
          <Timer :duration="exercise.duration" :title="exercise.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Timer from './Timer.vue';

export default {
  components: { Timer },
  data() {
    return {
      selectedBodyPart: null,
      bodyPartExercises: {
        Chest: [
          { name: "Push-Ups", duration: 60 },
          { name: "Chest Press", duration: 45 },
          { name: "Dumbbell Fly", duration: 90 },
        ],
        Legs: [
          { name: "Squats", duration: 60 },
          { name: "Lunges", duration: 45 },
          { name: "Leg Press", duration: 90 },
        ],
        Arms: [
          { name: "Bicep Curls", duration: 60 },
          { name: "Tricep Dips", duration: 45 },
          { name: "Hammer Curls", duration: 90 },
        ],
      },
    };
  },
  computed: {
    exercises() {
      return this.selectedBodyPart ? this.bodyPartExercises[this.selectedBodyPart] : [];
    },
  },
  methods: {
    selectBodyPart(part) {
      this.selectedBodyPart = part;
    },
  },
};
</script>

<style scoped>
.exercise-page {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.body-map {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.body-diagram {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.body-part {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transform: translate(-50%, -50%);
}

.body-part:hover {
  background-color: #007bff;
  color: white;
}

.exercises-list {
  text-align: left;
  margin-top: 20px;
}

.exercise-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}
</style>
