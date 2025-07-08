function getUserList() {
  return [
    {
      userId: 1,
      username: "username",
      password: "password",
      token: "123213wduifhawiofjajgw",
    },
  ];
}

export default [
  {
    url: "/api/user/login",
    type: "post",
    response: ({ body }) => {
      const checkUser = getUserList().find((item) => item.username === body.username && item.password === body.password);
      if (!checkUser) {
        return { code: 201, message: `账号或密码不正确`, data: null };
      }
      console.log(body.username, checkUser.username);
      const { token } = checkUser;
      return { code: 200, message: "操作成功", data: { token } };
    },
  },
  {
    url: "/api/user/info",
    type: "get",
    response: ({ headers }) => {
      const token = headers.token;
      const checkUser = getUserList().find((item) => item.token === token);
      if (!checkUser) {
        return { code: 201, data: { message: "获取用户信息失败" } };
      }

      return { code: 200, data: { checkUser } };
    },
  },
];
