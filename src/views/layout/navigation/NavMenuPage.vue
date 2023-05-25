<template lang="">
    <nav>
      <v-app-bar color="blue darken-1">
        </v-toolbar-title >
        <span style="color: white">
          <v-icon style="color: white">mdi-store</v-icon>
          <b>
            Study-3 Team-1
          </b>
        </span>
      </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="isLogin" @click="logout">
          <span >로그아웃</span>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>
    </nav>
  </template>
  <script>
  export default {
    data() {
      return {
        isLogin: false,
        userToken: 0,
      };
    },
    methods: {
      logout() {
          this.isLogin = false
          localStorage.clear()
          this.$router.push({
              name: "home"
          })
          location.reload()
          .catch(() => {
              location.reload()
          })
      }
    },
    mounted () {
      this.userToken = localStorage.getItem("loginUserToken")
      if (this.userToken > 0) {
          this.isLogin = true
      }
    }
  };
  </script>
  <style scoped>
nav {
  margin: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  