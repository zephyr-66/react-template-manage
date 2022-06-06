import { LinksFunction, MetaFunction } from "@remix-run/node";
import { ListPage, links as listPageLinks } from "~/components/list-page";
import { ListPageProps } from "~/components/list-page";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [...listPageLinks()];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "用户管理",
  viewport: "width=device-width,initial-scale=1",
});

const listpage: ListPageProps<any> = {
  url: "",
  columns: [
    {
      id: "userName",
      title: "用户名",
      search: {
        el: {
          placeholder: "用户名",
        },
      },
    },
    {
      id: "userName2",
      title: "用户名2",
      search: {
        el: {
          placeholder: "用户名2",
        },
      },
    },
    {
      id: "userName3",
      title: "用户名3",
      search: {
        el: {
          placeholder: "用户名3",
        },
      },
    },
    {
      id: "userName4",
      title: "用户名4",
      search: {
        el: {
          placeholder: "用户名4",
        },
      },
    },
  ],
};

export default function User() {
  return (
    <div className="user-page list-page">
      <ListPage {...listpage} />
    </div>
  );
}
