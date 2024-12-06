<template>
  <div class="home">
    <h1 class="shadow-text">Fitness Tracker</h1>
  </div>
</template>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: var(--color-text);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: bold;
}

h1 {
  font-size: 4rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(0.25turn, #f3d098, #b6915d, #a77e4a);
  border-image-slice: 1;
}

.shadow-text { 
  color: #fff;
  text-shadow: 
    1px 1px 0 #000, 
    2px 2px 0 #a77e4a, 
    3px 3px 0 #b6915d, 
    4px 4px 0 #f3d098; 
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
    margin: 0, 1rem;
  }
}
</style>