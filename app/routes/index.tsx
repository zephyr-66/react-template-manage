import { LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import Cookies from "js-cookie";

export const loader: LoaderFunction = async (ctx) => {
  console.log(ctx.request.headers);
  return null;
};
export default function Index() {
  useEffect(() => {
    console.log("cookie", Cookies.get());
    const res = fetch("http://127.0.0.1:4523/mock/999987/uaa/api/user/list", {
      credentials: "include",
    });
  }, []);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
