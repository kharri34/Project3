<template>
  <div class="workoutlibrary">
    <h1 class="shadow-text">Workout Library</h1>
    <div class="categories">
      <router-link to="/aerobics">
        <SvgButton text="Aerobic Workouts" />
      </router-link>
      <router-link to="/arms">
        <SvgButton text="Arm Workouts" />
      </router-link>
      <router-link to="/back">
        <SvgButton text="Back Workouts" />
      </router-link>
      <router-link to="/chest">
        <SvgButton text="Chest Workouts" />
      </router-link>
      <router-link to="/core">
        <SvgButton text="Core Workouts" />
      </router-link>
      <router-link to="/fullbody">
        <SvgButton text="Full-Body Workouts" />
      </router-link>
      <router-link to="/legs">
        <SvgButton text="Leg Workouts" />
      </router-link>
      <router-link to="/shoulders">
        <SvgButton text="Shoulder Workouts" />
      </router-link>
      <router-link to="/stretches">
        <SvgButton text="Stretches" />
      </router-link>
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

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f211e;
    font-weight: bold;
    height: 100vh;
    width: 100%;
  }
  
  h1 {
    position: relative;
    margin: 0;
    padding: 10px;
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(0.25turn, #e4d5ab, rgb(233, 210, 147), rgb(237, 204, 113), rgb(238, 192, 64), rgb(240, 179, 11));
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
  
  .categories {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 80px;
    justify-items: center;
    flex-direction: column; 
    padding: 40px;
    width: 90%;
    margin: 0 auto;
  }
  
  .category-card {
    position: relative;
    display: flex;
    width: 50rem;
    height: 5rem;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    
    color: #ccd3ca;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
                 -2px -2px 4px rgba(0, 0, 0, 0.8);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 10px;
    box-shadow: inset -3px -3px 5px rgba(255, 255, 255, 0.3),
                inset 3px 3px 5px rgba(0, 0, 0, 0.4),
                3px 3px 8px rgba(0, 0, 0, 0.6);
    background-color:#161d1b;
    
    transition: transform 0.3s, box-shadow 0.3s;
    margin-bottom: 20px;  
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
  
  .category-card:focus {
    box-shadow: 0 0 0 3px #7a8074;
  }
  

  @media (max-width: 768px) {
    .category-card {
      height: 150px; 
    }
  }
</style>
  
  
    