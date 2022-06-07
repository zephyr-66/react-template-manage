import { ReactNode, CSSProperties } from "react";
import type { FormItemProps, FormProps as Props } from "antd";
import type { CommonType, GridType } from "~/components/grid-wrapper/typing";

export type ValueType = "input" | "select" | "dateRange" | ReactNode;

export type OperationType = {
  searchRender: boolean;
  collapsed: boolean;
};

export type FormItemType = {
  valueType?: ValueType;
  el?: {
    style?: CSSProperties;
    className?: string;
    placeholder?: string;
  } & Record<string, any>;
} & FormItemProps;

export type FormType = {
  grid?: boolean | (GridType & CommonType);
  content?: FormItemType[];
  operate?: OperationType;
  children?: ReactNode;
} & Props;
