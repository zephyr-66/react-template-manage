import { createCookieSessionStorage, createCookie } from "@remix-run/node";

export const storage = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "Authorization",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  },
});

export const userPrefs = createCookie("user-prefs", {
  maxAge: 604_800, // one week
});
