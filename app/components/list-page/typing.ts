import { ReactNode } from "react";
import { FixedType } from "rc-table/lib/interface";

export type ListPageProps<RecordType> = {
  id: string;
  title: string;
  fixed?: FixedType;
  render?: (value: any, record: RecordType, index: number) => ReactNode;
};
