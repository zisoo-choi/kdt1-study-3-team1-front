<template>
    <div>
      <h2>회원 가입</h2>
      <SignUpForm @submit="createAccount" />
    </div>
  </template>
  <script>
  import SignUpForm from "@/components/account/SignUpForm.vue";
  import { mapActions } from "vuex";
  
  const accountModule = "accountModule";
  
  export default {
    components: {
        SignUpForm,
    },
    methods: {
      ...mapActions(accountModule, ["requestCreateAccountToSpring"]),
      async createAccount(payload) {
        console.log(payload)
        await this.requestCreateAccountToSpring(payload);
        await this.$router.push({
          name: "home",
        });
      },
    },
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
  