import { ReactNode } from "react";
import { Form, Row, Col } from "antd";
import { FormType, FormItemType } from "./typing";

const childComponent = (type: String, el: any): ReactNode => {
  switch (type) {
    case "input":
      const Component = require("antd/lib/input").default;
      return <Component {...el} />;
  }
};
const renderer = (data: FormItemType[]): ReactNode[] => {
  const children: ReactNode[] = [];
  data.forEach(({ valueType, el, ...props }, index) => {
    // 默认input类型
    const type = valueType ?? "input";
    children.push(
      <Col key={index} xxl={6} xl={6} lg={8} md={8} sm={24} xs={24}>
        <Form.Item {...props}>
          {typeof type === "string" ? childComponent(type, el) : type}
        </Form.Item>
      </Col>
    );
  });
  return children;
};
export default function FormRenderer(props: FormType) {
  const { layout, content, children, ...args } = props;
  const inline = layout === "inline";
  if (content) {
    return (
      <Form
        {...args}
        className={props.layout === "inline" ? "inline-form" : ""}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          {renderer(content)}
          {children}
        </Row>
      </Form>
    );
  }
  return <></>;
}
