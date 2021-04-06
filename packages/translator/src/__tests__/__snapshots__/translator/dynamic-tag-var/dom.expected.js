import child from "./components/child/index.marko";
import { dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("pQWQ/U0y", input => {
  const data1 = _dynamicTag(child, null);

  const _tagName = input.show && child;

  const data2 = _dynamicTag(_tagName, null);

  const data3 = _dynamicTag(input.dynamic, null);

  const _tagName2 = input.show && "div";

  const el1 = _dynamicTag(_tagName2, null);
});
export default _createRenderFn(template, walks, ["show", "dynamic"], hydrate);