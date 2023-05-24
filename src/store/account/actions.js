import axiosInst from "@/utility/axiosInst";

export default {
  requestCreateAccountToSpring({}, payload) {
    const { email, password } = payload;
    return axiosInst
      .post("shopping/create-account", { email, password })
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
      .post("shopping/login", { email, password })
      .then((res) => {
        if (res.data != null) {
          alert("로그인 성공!");
          let token = res.data.token;
          localStorage.setItem("loginUserToken", token);
        } else {
          alert("로그인 실패!");
        }
      });
  },
};
