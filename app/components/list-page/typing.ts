import type { ColumnType, ColumnGroupType } from "antd/lib/table";
import { FormItemType, OperationType } from "../form-renderer/typing";
export type SearchTransformKeyFn = (
  value: any,
  namePath: string,
  allValues: any
) => string | Record<string, any>;

export type ColumnsProps<RecordType> = {
  search?:
    | false
    | (FormItemType & {
        transform?: SearchTransformKeyFn;
      });
} & (ColumnGroupType<RecordType> | ColumnType<RecordType>);
export type ListPageProps<RecordType> = {
  /** @description 列表api */
  url?: string;
  /** @description 列表数据源，优先级高于url */
  dataSource?: RecordType[];
  /** @description 配置table和filter表单 */
  search?: OperationType;
  /** @description 配置table和filter表单 */
  columns: ColumnsProps<RecordType>[];
};
