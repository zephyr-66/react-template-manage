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
}: GridType & CommonType): GridHelpers => ({
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
      /**
       * `xs` takes precedence over `span`
       * avoid `span` doesn't work
       */
      if (
        typeof originProps.span === "undefined" &&
        typeof originProps.xs === "undefined"
      ) {
        originProps.xs = 24;
      }
      return originProps;
    }, [args]);
    console.log("props", props);
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
        props.grid = true;
        return props;
      }
      return {
        grid: props,
      };
    }
  }, [props]);

  console.log("config", config);

  return useMemo(
    () =>
      gridHelpers({
        grid: !!config.grid,
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
