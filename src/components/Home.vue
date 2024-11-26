<template>
  <div class="home">
    <h1 class="shadow-text">Fitness Tracker</h1>
  </div>
</template>

<style scoped>
.home {
  background-color:black;
  text-align: center;
  color:silver;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: large;
  font-weight: bold;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
h1 {
  position: relative;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  border-bottom: 2px solid transparent;
  border-image: linear-gradient(0.25turn, rgb(228, 213, 171), rgb(233, 210, 147), rgb(237, 204, 113), rgb(238, 192, 64), rgb(240, 179, 11));
  border-image-slice: 1;
}

.shadow-text { 
  color: #fff;
  text-shadow: 
    1px 1px 0 #000, 
    2px 2px 0 #333, 
    3px 3px 0 #666, 
    4px 4px 0 #999; 
}

</style>