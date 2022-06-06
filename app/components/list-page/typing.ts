import { ReactNode } from "react";
import { FixedType, RenderedCell } from "rc-table/lib/interface";
import { FormItemType } from "../form-renderer/typing";
export type SearchTransformKeyFn = (
  value: any,
  namePath: string,
  allValues: any
) => string | Record<string, any>;

export type ColumnType<RecordType> = {
  id: string;
  title: string;
  search?:
    | false
    | (FormItemType & {
        transform?: SearchTransformKeyFn;
      });
  fixed?: FixedType;
  render?: (
    value: any,
    record: RecordType,
    index: number
  ) => ReactNode | RenderedCell<RecordType>;
};
export type ListPageProps<RecordType> = {
  /** @description 列表api */
  url?: string;
  /** @description 列表数据源，优先级高于url */
  dataSource?: RecordType[];
  /** @description 配置table和filter表单 */
  columns: ColumnType<RecordType>[];
};
