<template>
  <div class="timer-container">
    <section class="wrapper">
      <div class="timer-title-top">{{ title }}</div>
      <div class="timer-title-bottom" aria-hidden="true">{{ title }}</div>
    </section>
    <div class="timer-display"><span>{{ formatTime(remainingTime) }}</span></div>
    <div class="timer-settings">
      <label for="custom-time">Set Time (seconds):</label>
      <input id="custom-time" type="number" v-model.number="customTime" :disabled="isRunning"
        placeholder="Enter time in Minutes" />
      <div class="timer-control">
        <button @click="incrementSeconds" :disabled="isRunning" class="btn-control">+</button>
        <span>{{ userSeconds }}</span>
        <button @click="decrementSeconds" :disabled="isRunning" class="btn-control">-</button>
      </div>
      <button @click="setCustomTime" :disabled="isRunning || !customTime" class="btn btn-set">Set Time</button>
    </div>
    <div class="timer-actions">
      <button @click="startTimer" :disabled="isRunning" class="btn btn-start">Start <div class="btn_horizontal"></div>
        <div class="btn_vertical"></div>
      </button>
      <button @click="pauseTimer" :disabled="!isRunning" class="btn btn-pause">Pause <div class="btn_horizontal"></div>
        <div class="btn_vertical"></div>
      </button>
      <button @click="resetTimer" class="btn btn-reset">Reset <div class="btn_horizontal"></div>
        <div class="btn_vertical"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingTime: 60, // Default time in seconds
      customTime: null, // Custom time entered by the user (in seconds)
      isRunning: false, // Timer running state
      timer: null, // Reference to the interval timer
      title: "Workout Timer",
      userSeconds: 60, // Current user seconds (initially set to 60)
    };
  },
  methods: {
    // Formats the time as MM:SS
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    },
    setCustomTime() {
      if (this.customTime > 0) {
        this.remainingTime = this.customTime * 60; // Update remainingTime to customTime
        this.userSeconds = this.customTime % 60; // Sync userSeconds to customTime
      }
    },
    // Sets the custom time when the "Set Time" button is clicked
    incrementSeconds() {
      this.remainingTime += 60; // Add 60 seconds (1 minute)
      this.userSeconds = this.remainingTime; // Sync userSeconds
    },

    decrementSeconds() {
      if (this.remainingTime > 0) { // Prevent going below 1 minute
        this.remainingTime -= 60; // Subtract 60 seconds (1 minute)
        this.userSeconds = this.remainingTime; // Sync userSeconds
      }
    },
    incrementSeconds() {
      this.remainingTime += 1; // Add 60 seconds (1 minute)
      this.userSeconds = this.remainingTime; // Sync userSeconds
    },

    decrementSeconds() {
      if (this.remainingTime > 0) { // Prevent going below 1 minute
        this.remainingTime -= 1; // Subtract 60 seconds (1 minute)
        this.userSeconds = this.remainingTime; // Sync userSeconds
      }
    },

    // Starts the timer
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timer = setInterval(() => {
          if (this.remainingTime > 0) {
            this.remainingTime -= 1; // Decrement remaining time
          } else {
            this.resetTimer(); // Reset the timer when it hits 0
          }
        }, 1000);
      }
    },
    // Pauses the timer
    pauseTimer() {
      this.isRunning = false;
      clearInterval(this.timer); // Clear the interval
    },
    // Resets the timer to the last custom or default time
    resetTimer() {
      this.isRunning = false;
      clearInterval(this.timer);
      // Reset to custom time (if set) or default of 1 minute (60 seconds)
      this.remainingTime = (this.customTime || 1) * 60;
      this.userSeconds = this.remainingTime; // Sync userSeconds with remainingTime
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  text-align: center;
  font-family: "Oswald", sans-serif;
  margin-bottom: 100px;
  height: auto;
}

.timer-title-top,
.timer-title-bottom {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  font-size: clamp(0.5rem, 0.5rem + 4vw, 2.5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
  text-align: center;

}

.timer-title-top {
  clip-path: polygon(-20% 100%, 100% 0%, 0% 0%, 0% 100%);
  z-index: 2;
}

.timer-title-bottom {
  clip-path: polygon(-15% 100%, 100% 5%, 100% 100%, 0% 100%);
  color: transparent;
  background: linear-gradient(176deg, black 47%, hsl(0, 0%, 100%) 60%);
  background-clip: text;
  -webkit-background-clip: text;
  transform: translateX(-0.02em);
  z-index: 1;
}

.timer-container {
  text-align: center;
  font-family: 'Oswald', sans-serif;
  background: black;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  margin: 20px;
}

.timer-display {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  background: #171717;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timer-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

}

.timer-settings label {
  font-size: 1rem;
  font-weight: bold;
}

.timer-settings input {
  width: 100%;
  max-width: 200px;
  padding: 5px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
  justify-content: center;
}

.timer-control {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.timer-actions {
  display: flex;
  justify-content: center;
  gap: 200px;
  margin: 20px;

}

.btn {
  --offset: 10px;
  --border-size: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  position: relative;
  padding: 10px 15px;
  background: transparent;
  color: var(--animation-color);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: inset 0 0 0 var(--border-size) var(--border-color);
  transition: background 0.8s ease;
}

.btn:hover {
  background: rgba(100, 0, 0, 0.03);
}

.btn_horizontal,
.btn_vertical {
  position: absolute;
  top: var(--horizontal-offset, 0);
  right: var(--vertical-offset, 0);
  bottom: var(--horizontal-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;
}

.btn_horizontal::before,
.btn_vertical::before {
  content: "";
  position: absolute;
  border: inherit;
}

.btn_horizontal {
  --vertical-offset: calc(var(--offset) * -1);
  border-top: var(--border-size) solid var(--border-color);
  border-bottom: var(--border-size) solid var(--border-color);
}

.btn_horizontal::before {
  top: calc(var(--vertical-offset) - var(--border-size));
  bottom: calc(var(--vertical-offset) - var(--border-size));
  left: calc(var(--vertical-offset) * -1);
  right: calc(var(--vertical-offset) * -1);
}

.btn:hover .btn_horizontal {
  transform: scaleX(0);
}

.btn_vertical {
  --horizontal-offset: calc(var(--offset) * -1);
  border-left: var(--border-size) solid var(--border-color);
  border-right: var(--border-size) solid var(--border-color);
}

.btn_vertical::before {
  top: calc(var(--horizontal-offset) * -1);
  bottom: calc(var(--horizontal-offset) * -1);
  left: calc(var(--horizontal-offset) - var(--border-size));
  right: calc(var(--horizontal-offset) - var(--border-size));
}

.btn:hover .btn_vertical {
  transform: scaleY(0);
}

.btn-start {
  --animation-color: #165a26;
  --border-color: #28a745;
  border: none;
  font-size: 2.5rem;
  margin-top: 4rem;
}

.btn-pause {
  --animation-color: #664e04;
  --border-color: #ffc107;
  border: none;
  margin-top: 4rem;
  font-size: 2.5rem;
}

.btn-reset {
  --animation-color: #61171e;
  --border-color: #dc3545;
  border: none;
  font-size: 2.5rem;
  margin-top: 4rem;
}

.btn-set {
  --animation-color: #17a2b8;
  border: none;
  margin-top: 20px;
  justify-content: center;
}

.btn:disabled {
  --animation-color: #666;
  --border-color: transparent;
  background-color: transparent;
  border: none;
  cursor: not-allowed;
}

.btn-control {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3 ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.btn-control:hover {
  background-color: aliceblue;
  /* Darker blue on hover */
}

.btn-control:disabled {
  cursor: not-allowed;
  background-color: #f0f0f0;
  color: #aaa;
}
</style>
