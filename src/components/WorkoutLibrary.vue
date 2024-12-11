<template>
  <div class="workoutlibrary">
    <h1 class="shadow-text underline">Workout Library</h1>
    <div id="grid">
      <router-link id="item1" to="/aerobics">
        <SvgButton text="Aerobic Workouts" gradientId="gradient1"/>
      </router-link>


      <!--<router-link id="item1" to="/aerobics"><SvgButton text="Aerobic Workouts" gradientId="gradient1"/></router-link> -->
      <router-link id="item2" to="/chest"><SvgButton text="Chest Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item3" to="/legs"><SvgButton text="Leg Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item4" to="/arms"><SvgButton text="Arm Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item5" to="/core"><SvgButton text="Core Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item6" to="/shoulders"><SvgButton text="Shoulder Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item7" to="/back"><SvgButton text="Back Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item8" to="/fullbody"><SvgButton text="Full-Body Workouts" gradientId="gradient1"/></router-link>
      <router-link id="item9" to="/stretches"><SvgButton text="Stretches" gradientId="gradient1"/></router-link>
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
  width:93%;
  background:linear-gradient(0.25turn, #fdd87d,#fce1a4, #b28031, #895724, #6e3c1b);;
  position:absolute;
  right:6%;
  bottom:0;
}

.shadow-text {
  position: relative;
  left: 170px;
  color: #fff;
  text-shadow: 
    1px 1px 0 #6e3c1b, 
    2px 2px 0 #895724, 
    3px 3px 0 #b28031, 
    4px 4px 0 #ffd054; 
}

#grid {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin-top: 10px;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  margin-right: 5px;
}

#item1 { grid-area: 1 / 3 / 2 / 4; }
#item2 { grid-area: 3 / 3 / 4 / 4; }
#item3 { grid-area: 5 / 3 / 6 / 4; }
#item4 { grid-area: 2 / 4 / 3 / 5; }
#item5 { grid-area: 4 / 4 / 5 / 5; }
#item6 { grid-area: 6 / 4 / 7 / 5; }
#item7 { grid-area: 3 / 5 / 4 / 6; }
#item8 { grid-area: 5 / 5 / 6 / 6; }
#item9 { grid-area: 7 / 5 / 8 / 6; }
</style>

  
    