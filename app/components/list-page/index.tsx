import { ReactNode, useMemo } from "react";
import type { LinksFunction } from "@remix-run/node";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import type { ListPageProps, ColumnsProps } from "./typing";
import FormRenderer from "../form-renderer";
import type {
  FormType,
  FormItemType,
  OperationType,
} from "../form-renderer/typing";
import styles from "./index.css";

const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
const runFunction = (valueEnum: any): ReactNode => {
  if (typeof valueEnum === "function") {
    return valueEnum();
  }
  return valueEnum;
};
const renderer = <T,>(
  list: ColumnsProps<T>[]
): { form: FormType; columns: ColumnsType<T> } => {
  const content: FormItemType[] = [];
  const columns: ColumnsType<T> = [];
  list.forEach(({ search, ...item }) => {
    const filter = search ?? {};
    if (filter) {
      const label = runFunction(item.title);
      content.push({
        name: item?.key,
        label,
        el: filter.el,
      });
    }
    columns.push(item);
  });
  const form: FormType = { content };
  return {
    form,
    columns,
  };
};
const ListPage = <RecordType extends Record<string, any>>(
  props: ListPageProps<RecordType>
) => {
  const { columns, search = { searchRender: true, align: "right" } } = props;
  const { form, columns: ss } = useMemo(
    () => renderer<any>(columns),
    [columns]
  );
  form.operate = search;
  return (
    <div className="list-page-main">
      <div className="list-page-filter">
        <FormRenderer
          {...form}
          grid={{
            rowProps: {
              gutter: 20,
            },
            colProps: {
              xs: 24,
              md: 8,
              xl: 6,
            },
          }}
        />
      </div>
      <div className="list-page-main">
        <Table columns={ss} dataSource={[]} />
      </div>
    </div>
  );
};

export { links, ListPageProps, ListPage };
