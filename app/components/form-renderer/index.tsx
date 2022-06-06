import { ReactNode, useMemo, useState, Fragment } from "react";
import { Form, Row, Col, Button, Space } from "antd";
import { FormType } from "./typing";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

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
  const { layout, content, children, operate, ...args } = props;
  if (content) {
    const inline = layout === "inline";
    const [form] = Form.useForm();
    const list = content ?? [];
    const [expand, setExpand] = useState(false);
    // 表单render
    const formChild = useMemo(() => {
      const childs: ReactNode[] = [];
      list.forEach(({ valueType, el, ...props }, index) => {
        // 默认input类型
        const type = valueType ?? "input";
        const component = (
          <Form.Item key={index} {...props}>
            {typeof type === "string" ? childComponent(type, el) : type}
          </Form.Item>
        );
        const child = inline ? (
          <Col key={index} {...layoutCol}>
            {component}
          </Col>
        ) : (
          component
        );
        childs.push(child);
      });
      return childs;
    }, [content]);
    // 表单操作按钮
    const formOperate = useMemo(() => {
      const children: ReactNode[] = [];
      const searchRender = operate?.searchRender ?? true;
      if (searchRender) {
        children.push(
          <Col
            key={list.length}
            xs={24}
            sm={24}
            md={{ span: 8, offset: 16 }}
            style={{ textAlign: "right" }}
          >
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
          </Col>
        );
      }
      return children;
    }, [operate, expand]);
    const formContent = (
      <>
        {formChild}
        {formOperate}
        {children ? <Col {...layoutCol}>{children}</Col> : null}
      </>
    );
    return (
      <Form
        form={form}
        {...args}
        onFinish={(val) => {
          console.log(val);
        }}
      >
        {inline ? (
          <Row gutter={{ xs: 8, sm: 16, lg: 24 }}>{formContent}</Row>
        ) : (
          formContent
        )}
      </Form>
    );
  }
  return <></>;
}
