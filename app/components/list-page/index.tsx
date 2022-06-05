import FormRenderer from "../form-renderer";
import type { LinksFunction } from "@remix-run/node";
import { Form, Button, Space, Table } from "antd";
import type { ListPageProps } from "./typing";
import styles from "./index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const ListPage = <RecordType,>(list: ListPageProps<RecordType>[]) => {
  return (
    <div className="list-page-main">
      <div className="list-page-filter">
        <FormRenderer>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button htmlType="button">重置</Button>
            </Space>
          </Form.Item>
        </FormRenderer>
      </div>
      <div className="list-page-main">
        <Table<{}> />
      </div>
    </div>
  );
};
