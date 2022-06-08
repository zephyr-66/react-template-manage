import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import antdStyle from "antd/dist/antd.css";
import globalStyle from "~/styles/global.css";
import { storage } from "~/sessions";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: antdStyle },
    { rel: "stylesheet", href: globalStyle },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "后台管理",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  // const url = new URL(request.url);
  // console.log("url", url);
  const session = await storage.getSession();
  console.log("session", session.data);
  return null;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
