<template>
  <div class="workoutlibrary">
    <h1 class="shadow-text underline">Workout Library</h1>
    <div class="categories-grid">
      <router-link class="div1" to="/aerobics"><SvgButton text="Aerobic Workouts" /></router-link>
      <router-link class="div2" to="/chest"><SvgButton text="Chest Workouts" /></router-link>
      <router-link class="div3" to="/legs"><SvgButton text="Leg Workouts" /></router-link>
      <router-link class="div4" to="/arms"><SvgButton text="Arm Workouts" /></router-link>
      <router-link class="div5" to="/core"><SvgButton text="Core Workouts" /></router-link>
      <router-link class="div6" to="/shoulders"><SvgButton text="Shoulder Workouts" /></router-link>
      <router-link class="div7" to="/back"><SvgButton text="Back Workouts" /></router-link>
      <router-link class="div8" to="/fullbody"><SvgButton text="Full-Body Workouts" /></router-link>
      <router-link class="div9" to="/stretches"><SvgButton text="Stretches" /></router-link>
    </div>
  </div>
</template>


  
  <script>
  import SvgButton from "@/components/SvgButton.vue";
  export default {
    components: {
        SvgButton,
    },
  };
  </script>

<style scoped>
.workoutlibrary {
  
  height: 100%;
  width: 100%;
  overflow: hidden;
}

h1 {
  padding: 10px;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.underline::after {
  content:'';
  height:2px;
  width:89%;
  background:linear-gradient(0.25turn, #fdd87d,#fce1a4, #b28031, #895724, #6e3c1b);;
  position:absolute;
  right:6%;
  bottom:0;
}

.shadow-text {
  position: relative;
  left: 110px;
  color: #fff;
  text-shadow: 
    1px 1px 0 #6e3c1b, 
    2px 2px 0 #895724, 
    3px 3px 0 #b28031, 
    4px 4px 0 #ffd054; 
}

.categories-grid {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(auto, 250px);
  grid-template-rows: repeat(auto, 250px);
  gap:auto;
  margin-top: 10px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 6 / 2 / 7; }
.div2 { grid-area: 3 / 6 / 4 / 7; }
.div3 { grid-area: 5 / 6 / 6 / 7; }
.div4 { grid-area: 2 / 7 / 3 / 8; }
.div5 { grid-area: 4 / 7 / 5 / 8; }
.div6 { grid-area: 6 / 7 / 7 / 8; }
.div7 { grid-area: 3 / 8 / 4 / 10; }
.div8 { grid-area: 5 / 8 / 6 / 10; }
.div9 { grid-area: 7 / 8 / 8 / 10; }
</style>

  
    