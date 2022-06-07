import { ReactNode, useMemo, useState, Fragment } from "react";
import { Form, Row, Col, Button, Space } from "antd";
import { FormType } from "./typing";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useGridHelpers } from "~/components/grid-wrapper";

const childComponent = (type: String, el: any): ReactNode => {
  switch (type) {
    case "input":
      const Component = require("antd/lib/input").default;
      return <Component {...el} />;
  }
};
const layoutCol = {
  xl: 6,
  md: 8,
  xs: 24,
};
export default function FormRenderer(props: FormType) {
  const { content = [], grid, children, operate, ...args } = props;
  if (content.length === 0) {
    return null;
  }
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const { RowWrapper, ColWrapper } = useGridHelpers(grid);
  // 表单render
  const formChild = useMemo(() => {
    const childs: ReactNode[] = [];
    content.forEach(({ valueType, el, ...props }, index) => {
      // 默认input类型
      const type = valueType ?? "input";
      childs.push(
        <ColWrapper key={index}>
          <Form.Item {...props}>
            {typeof type === "string" ? childComponent(type, el) : type}
          </Form.Item>
        </ColWrapper>
      );
    });
    return childs;
  }, [content]);
  // 表单操作按钮
  const formOperate = useMemo(() => {
    const children: ReactNode[] = [];
    const searchRender = operate?.searchRender ?? true;
    if (searchRender) {
      children.push(
        <ColWrapper key={content.length}>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button
                onClick={() => {
                  form.resetFields();
                }}
              >
                重置
              </Button>
              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? (
                  <>
                    <UpOutlined />
                    收起
                  </>
                ) : (
                  <>
                    <DownOutlined />
                    展开
                  </>
                )}
              </a>
            </Space>
          </Form.Item>
        </ColWrapper>
      );
    }
    return children;
  }, [operate, expand]);
  return (
    <Form
      form={form}
      {...args}
      onFinish={(val) => {
        console.log(val);
      }}
    >
      <RowWrapper>
        {formChild}
        {formOperate}
        {children ? <ColWrapper {...layoutCol}>{children}</ColWrapper> : null}
      </RowWrapper>
    </Form>
  );
}
