<script>
  export default {
    name: "App",
  }
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
  nav {
    padding: 1rem;
  }
  nav ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  nav a {
    color: #333;
    font-weight: bold;
    font-family:Georgia, 'Times New Roman', Times, serif;
  }
  nav a:hover {
    text-decoration: underline;
    color:ghostwhite;
    background-color: darkslategray;
  }
</style>

<!--
comment
Scipt
export default {
  data(32:19) {
    return {
      name: 'Katie Harrington',
      status: 'pending',
      tasks: ['Task One,']
    };
  },
};
template
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
</comment>

-->