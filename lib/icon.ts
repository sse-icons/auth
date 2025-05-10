import { type SVGProps, createElement } from "react";
import { mergeClassNames } from "./utils";
import { defaultAttributes } from "./constants";

export interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: number;
}

export const Icon = ({
  size = 80,
  className,
  color,
  ...rest
}: IconProps) => {
  const svgString = createElement("svg", {
    ...defaultAttributes,
    stroke: color,
    className: mergeClassNames("sse-icons", className),
    ...rest,
    width: size,
    height: size,
  });
  return svgString;
};
