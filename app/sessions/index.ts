import { createCookieSessionStorage, createCookie } from "@remix-run/node";

export const storage = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "__session",
    // all of these are optional
    secrets: ["s3cret1"],
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export const userPrefs = createCookie("user-prefs", {
  maxAge: 604_800, // one week
});
