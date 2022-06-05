import { LinksFunction, MetaFunction } from "@remix-run/node";
import { ListPage, links as listPageLinks } from "~/components/list-page";
import type { ListPageProps } from "~/components/list-page";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [...listPageLinks()];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "用户管理",
  viewport: "width=device-width,initial-scale=1",
});

export default function User() {
  const [listPage, setListPage] = useState<ListPageProps>({
    form: {
      layout: "inline",
      content: [
        {
          name: "userName",
          label: "用户名",
          type: "input",
          el: {
            placeholder: "请输入用户名",
          },
        },
        {
          name: "pwd",
          label: "密码",
          type: "input",
          el: {
            placeholder: "请输入用户名",
          },
        },
        {
          name: "pwd23",
          label: "密码",
          type: "input",
          el: {
            placeholder: "请输入用户名",
          },
        },
        {
          name: "pwd2",
          label: "密码",
          type: "input",
          el: {
            placeholder: "请输入用户名",
          },
        },
        {
          name: "pwd266",
          label: "密码",
          type: "input",
          el: {
            placeholder: "请输入用户名",
          },
        },
      ],
    },
  });
  return (
    <div className="user-page list-page">
      <ListPage {...listPage} />
    </div>
  );
}
