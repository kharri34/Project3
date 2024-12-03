<template>
    <div class="timer-app">
      <h2>{{ title }}</h2>
      <div class="timer-display">
        <span>{{ formatTime(remainingTime) }}</span>
      </div>
      <div class="actions">
        <button @click="startTimer" :disabled="isRunning">Start</button>
        <button @click="pauseTimer" :disabled="!isRunning">Pause</button>
        <button @click="resetTimer">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      duration: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        default: "Workout Timer",
      },
    },
    data() {
      return {
        remainingTime: this.duration,
        timer: null,
        isRunning: false,
      };
    },
    methods: {
      formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
      },
      startTimer() {
        if (!this.isRunning && this.remainingTime > 0) {
          this.isRunning = true;
          this.timer = setInterval(() => {
            if (this.remainingTime > 0) {
              this.remainingTime -= 1;
            } else {
              this.pauseTimer();
              this.$emit("finished");
            }
          }, 1000);
        }
      },
      pauseTimer() {
        this.isRunning = false;
        clearInterval(this.timer);
      },
      resetTimer() {
        this.pauseTimer();
        this.remainingTime = this.duration;
      },
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  };
  </script>
  
  <style scoped>
  .timer-app {
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    width: 200px;
  }
  
  .timer-display {
    font-size: 2rem;
    margin: 10px 0;
  }
  
  .actions button {
    margin: 5px;
    padding: 10px 15px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  