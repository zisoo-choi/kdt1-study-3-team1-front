<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>

div {
  margin: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
