import axiosInst from "@/utility/axiosInst";

export default {
  requestCreateAccountToSpring({}, payload) {
    const { email, roleType, password } = payload;
    return axiosInst
      .post("/account/create-account", { email, roleType, password })
      .then((res) => {
        if (res.data) {
          alert("가입 성공!");
        } else {
          alert("동일한 계정이 이미 존재합니다");
        }
      });
  },
  requestLoginToSpring({}, payload) {
    const { email, password } = payload;
    return axiosInst
      .post("/account/login", { email, password })
      .then((res) => {
        if (res.data != null) {
          alert("로그인 성공!");
          let accountId = res.data.accountId;
          let roleType = res.data.roleType;
          localStorage.setItem("loginUserId", accountId);
          localStorage.setItem("loginUserRoleType", roleType)
        } else {
          alert("로그인 실패!");
        }
      });
  },
};
