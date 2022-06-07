import type { RowProps, ColProps } from "antd";

export type CommonType = {
  Wrapper?: React.FC<any>;
};

export type GridType = {
  /**
   * only works when grid is enabled
   *
   * When passing the `span` attribute, the default value is empty
   * @default
   * { xs: 24 }
   */
  colProps?: ColProps;
  /**
   * only works when grid is enabled
   * @default
   * { gutter: 8 }
   */
  rowProps?: RowProps;
};
