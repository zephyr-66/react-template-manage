import { createCookieSessionStorage, createCookie } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__manage",
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 有效期一天
      expires: new Date(Date.now() + 60_000), // 关闭浏览器1分钟后失效
      httpOnly: true, // 只有服务端可以使用此cookie
    },
  });

export { getSession, commitSession, destroySession };
