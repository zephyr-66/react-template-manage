export default function (http: any) {
  return {
    login(data?: Record<string, any>) {
      return http.request({
        url: "/api/user/login",
        method: "post",
        data,
      });
    },
  };
}
