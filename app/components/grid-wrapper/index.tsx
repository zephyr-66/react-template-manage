import type { CommonType, GridType } from "./typing";
import { Col, Row } from "antd";
import type { RowProps, ColProps } from "antd";
import { useMemo } from "react";

export interface GridHelpers {
  RowWrapper: React.FC<RowProps & CommonType>;
  ColWrapper: React.FC<ColProps & CommonType>;
}
const gridHelpers = ({
  grid,
  rowProps,
  colProps,
}: GridType & CommonType & { grid: boolean }): GridHelpers => ({
  RowWrapper({ children, Wrapper, ...props } = {}) {
    if (!grid) {
      return Wrapper ? <Wrapper>{children}</Wrapper> : (children as any);
    }
    return (
      <Row gutter={8} {...rowProps} {...props}>
        {children}
      </Row>
    );
  },
  ColWrapper({ children, Wrapper, ...args } = {}) {
    const props = useMemo(() => {
      const originProps = { ...colProps, ...args };
      // 由于xs等优先级高于span,这里处理一下以span为主
      if (originProps.span) {
        const { xs, sm, md, lg, xl, xxl, ...surplus } = originProps;
        return surplus;
      }
      return originProps;
    }, [args]);
    if (!grid) {
      return Wrapper ? <Wrapper>{children}</Wrapper> : children;
    }
    return (<Col {...props}>{children}</Col>) as any;
  },
});

export const useGridHelpers = (props?: (GridType & CommonType) | boolean) => {
  const config = useMemo(() => {
    {
      if (typeof props === "object") {
        return { ...props, grid: true };
      }
      return { grid: !!props };
    }
  }, [props]);

  return useMemo(
    () =>
      gridHelpers({
        grid: config.grid,
        rowProps: config?.rowProps,
        colProps: config?.colProps,
        Wrapper: config?.Wrapper,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      config?.Wrapper,
      config.grid,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify([config?.colProps, config?.rowProps]),
    ]
  );
};
