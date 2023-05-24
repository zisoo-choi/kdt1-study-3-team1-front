<template lang="">
  <div>
    <form @submit.prevent="createAccount">
      <label> 
        이메일:<input type="text" v-model="email" required /> 
      </label><br/>
      <label>
        비밀번호: <input type="password" v-model="password" required /> 
      </label><br/>
      <label>일반회원
        <input type="radio" name="roleType" @change="selectRoleType($event)" value="NORMAL"/> 
      </label><br/>
      <label>사업자
        <input type="radio" name="roleType" @change="selectRoleType($event)" value="BUSINESS"/>
      </label>
      <div align="center">
        <v-btn color="primary" type="submit">가입</v-btn>
        <router-link :to="{ name: 'home' }"> 취소 </router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      roleType: "",
    };
  },
  methods: {
    createAccount() {
      const { email, roleType, password } = this;
      this.$emit("submit", { email, roleType, password });
    },
    selectRoleType(event) {
      this.roleType = event.target.value;
    },
  },
};
</script>
<style></style>
