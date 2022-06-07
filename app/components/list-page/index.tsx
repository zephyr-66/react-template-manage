import type { LinksFunction } from "@remix-run/node";
import { Table } from "antd";
import type { ListPageProps, ColumnType } from "./typing";
import FormRenderer from "../form-renderer";
import type { FormType, FormItemType } from "../form-renderer/typing";
import styles from "./index.css";
import { useState } from "react";

const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
const renderer = <T,>(list: ColumnType<T>[]): { form: FormType } => {
  const content: FormItemType[] = [];
  list.forEach((item) => {
    const search = item.search ?? {};
    if (search) {
      content.push({
        name: item.id,
        label: item.title,
        el: search.el,
      });
    }
  });
  const form: FormType = { content };
  return {
    form,
  };
};
const ListPage = <RecordType,>(props: ListPageProps<RecordType>) => {
  const { columns, search } = props;
  const { form } = renderer<RecordType>(columns);
  form.operate = search;
  return (
    <div className="list-page-main">
      <div className="list-page-filter">
        <FormRenderer {...form} grid />
      </div>
      <div className="list-page-main">
        <Table<{}> />
      </div>
    </div>
  );
};

export { links, ListPageProps, ListPage };
