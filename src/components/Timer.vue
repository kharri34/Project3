<template>
  <div class="timer-container">
    <h2 class="timer-title">{{ title }}</h2>
    <div class="timer-display">
      <span>{{ formatTime(remainingTime) }}</span>
    </div>
    <div class="timer-settings">
      <label for="custom-time">Set Time (seconds):</label>
      <input
        id="custom-time"
        type="number"
        v-model.number="customTime"
        :disabled="isRunning"
        placeholder="Enter time in seconds"
      />
      <button @click="setCustomTime" :disabled="isRunning || !customTime" class="btn btn-set">
        Set Time
      </button>
    </div>
    <div class="timer-actions">
      <button @click="startTimer" :disabled="isRunning" class="btn btn-start">Start</button>
      <button @click="pauseTimer" :disabled="!isRunning" class="btn btn-pause">Pause</button>
      <button @click="resetTimer" class="btn btn-reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingTime: 60, // Default time set to 60 seconds
      customTime: null, // Custom time input
      isRunning: false,
      timer: null,
      title: "Workout Timer", // Title for the Timer
    };
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    },
    setCustomTime() {
      if (this.customTime > 0) {
        this.remainingTime = this.customTime;
      }
    },
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timer = setInterval(() => {
          if (this.remainingTime > 0) {
            this.remainingTime -= 1;
          } else {
            this.resetTimer();
          }
        }, 1000);
      }
    },
    pauseTimer() {
      this.isRunning = false;
      clearInterval(this.timer);
    },
    resetTimer() {
      this.isRunning = false;
      this.remainingTime = this.customTime || 60;
      clearInterval(this.timer);
    },
  },
};
</script>

<style scoped>
.timer-container {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #f7f8fa, #e2e6ed);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  margin-top: 150px;
}

.timer-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.timer-display {
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
  background: #f7f8fa;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timer-settings {
  margin-bottom: 15px;
}

.timer-settings label {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.timer-settings input {
  width: 100%;
  padding: 5px;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.timer-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-start {
  background-color: #28a745;
  color: white;
  border: none;
}

.btn-start:hover {
  background-color: #218838;
}

.btn-pause {
  background-color: #ffc107;
  color: white;
  border: none;
}

.btn-pause:hover {
  background-color: #e0a800;
}

.btn-reset {
  background-color: #dc3545;
  color: white;
  border: none;
}

.btn-reset:hover {
  background-color: #c82333;
}

.btn-set {
  background-color: #17a2b8;
  color: white;
  border: none;
}

.btn-set:hover {
  background-color: #138496;
}

.btn:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
