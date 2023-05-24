<template lang="">
  <div>
    <router-link :to="{ name: 'SignUpPage' }">
      <v-btn v-if="!isLoggedIn" color="primary">회원 가입</v-btn>
    </router-link> <br>
    <LoginForm @click="login" />
  </div>
</template>

<script>
import LoginForm from "@/components/account/LoginForm.vue";
import { mapActions } from "vuex";

const accountModule = "accountModule";

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    LoginForm,
  },
  methods: {
    ...mapActions(accountModule, ["requestLoginToSpring"]),
    async login(payload) {
      await this.requestLoginToSpring(payload);
      location.reload();
    },
  },
  mounted() {
    if (localStorage.getItem("loginUserToken") == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>

</style>
