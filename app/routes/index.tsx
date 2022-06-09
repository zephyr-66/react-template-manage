import { LoaderFunction, json } from "@remix-run/node";
import { useEffect } from "react";

export const loader: LoaderFunction = async (ctx) => {
  return null;
};
export default function Index() {
  useEffect(() => {
    console.log("document.cookie", document.cookie);
    const res = fetch("http://127.0.0.1:4523/mock/999987/uaa/api/user/list", {
      headers: {
        Authorization: "123333333",
      },
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
