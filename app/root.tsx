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
// import proStyle from "@ant-design/pro-components/dist/components.css";
import globalStyle from "~/styles/global.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: antdStyle },
    // { rel: "stylesheet", href: proStyle },
    { rel: "stylesheet", href: globalStyle },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "后台管理",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  console.log("url", url.searchParams.get("a"));
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
