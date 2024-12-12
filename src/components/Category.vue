<template>
  <div class="category">
    <section class="wrapper">
      <div class="top">{{ category }}</div>
      <div class="bottom" aria-hidden="true">{{ category }}</div>
    </section>
    <div class="list">
      <li v-for="workout in workouts" :key="workout.id">
          <router-link :to="workout.path">
              <SvgButton2 :text="workout.name"/>
          </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import SvgButton2 from "@/components/SvgButton2.vue";

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    workouts: {
      type: Array,
      required: true,
    },
  },
  components: {
    SvgButton2,
  },
};
</script>

<style scoped>
.category {
  background-color: black;
}

.router {
  color: white;
  list-style: none;
  text-decoration: none;
  margin-top: 100px;
  margin: 20px 0;
}

* {
  box-sizing: border-box;
}

.wrapper {
  height: auto;
  padding: 20px;
  font-family: "Oswald", sans-serif;
  font-size: clamp(1rem, 1rem + 8vw, 5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
}

.wrapper > div {
  position: absolute;
  width: 100%;
  text-align: center;
}

.top {
  clip-path: polygon(-20% 100%, 100% 0%, 0% 0%, 0% 100%);
}

.bottom {
  clip-path: polygon(-15% 100%, 100% 5%, 100% 100%, 0% 100%);
  color: transparent;
  background: linear-gradient(176deg, black 47%, hsl(0, 0%, 100%) 60%);
  background-clip: text;
  -webkit-background-clip: text;
  transform: translateX(-0.02em);
}

.list {
  list-style: none;
  margin-top: 100px;
}

li {
  background: transparent;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px, rgba(0, 0, 0, 0.1);
}
</style>

