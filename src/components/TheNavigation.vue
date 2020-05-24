<template>
  <nav id="nav">
    <ul class="nav-links">
      <p class="logo">Vue Travel App</p>
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link
          :to="{
         name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >{{ destination.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.vue-active-class {
  font-weight: bold;
  color: #ab26ab;
  padding: 0 5px;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  margin-top: -5px;
  padding-right: 20px;
  font-size: 20px;
  color: purple;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
