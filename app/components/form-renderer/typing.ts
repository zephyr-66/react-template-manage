import { ReactNode, CSSProperties } from "react";
import type { FormItemProps, FormProps as Props } from "antd";

export type ValueType = "input" | "select" | "dateRange" | ReactNode;

export type FormItemType = {
  valueType?: ValueType;
  el?: {
    style?: CSSProperties;
    className?: string;
    placeholder?: string;
  } & Record<string, any>;
} & FormItemProps;

export type FormType = {
  content?: FormItemType[];
  children?: ReactNode;
} & Props;
