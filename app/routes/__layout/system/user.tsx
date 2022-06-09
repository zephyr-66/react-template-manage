import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { ListPage, links as listPageLinks } from "~/components/list-page";
import { ListPageProps } from "~/components/list-page";
import { useOutletContext } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [...listPageLinks()];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "用户管理",
  viewport: "width=device-width,initial-scale=1",
});

type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

const listpage: ListPageProps<DataType> = {
  url: "",
  columns: [
    {
      dataIndex: "userName",
      title: "sss",
      search: {
        tooltip: "This is a required field",
        el: {
          placeholder: "用户名",
        },
      },
      render: (v, row) => {
        return <a>{v}</a>;
      },
    },
    {
      dataIndex: "userName2",
      title: "用户名2",
      search: {
        el: {
          placeholder: "用户名2",
        },
      },
    },
    {
      dataIndex: "userName3",
      title: "用户名3",
      search: {
        el: {
          placeholder: "用户名3",
        },
      },
    },
    {
      dataIndex: "userName4",
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
