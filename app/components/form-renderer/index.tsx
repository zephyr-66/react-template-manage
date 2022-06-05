import { Form, Input, Select } from "antd";
import type { FormProps as Props, FormItemProps, InputProps } from "antd";
import { ReactNode } from "react";

type Content = {
  type: String | ReactNode;
  el?: InputProps;
} & FormItemProps;

export type FormProps = {
  content?: Content[];
  children?: ReactNode;
} & Props;
const childComponent = (type: String, el: any): ReactNode => {
  switch (type) {
    case "input":
      return <Input {...el} />;
    case "select":
      return <Select {...el} />;
  }
};
const renderer = (data: Content[]): ReactNode[] => {
  const children: ReactNode[] = [];
  data.forEach(({ type, el, ...props }, index) => {
    props.rules;
    children.push(
      <Form.Item {...props} key={index}>
        {typeof type === "string" ? childComponent(type, el) : type}
      </Form.Item>
    );
  });
  return children;
};
export default function FormRenderer({
  content,
  children,
  ...props
}: FormProps) {
  if (content) {
    return (
      <Form
        {...props}
        className={props.layout === "inline" ? "inline-form" : ""}
      >
        {renderer(content)}
        {children}
      </Form>
    );
  }
  return <></>;
}
