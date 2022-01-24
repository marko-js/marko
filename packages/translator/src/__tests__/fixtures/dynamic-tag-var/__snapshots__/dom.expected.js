import child from "./components/child/index.marko";

const data1 = _dynamicTag(child, null);

const _tagName = show && child;

const data2 = _dynamicTag(_tagName, null);

const data3 = _dynamicTag(dynamic, null);

const _tagName2 = show && "div";

const el1 = _dynamicTag(_tagName2, null);

import { dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const apply = null;
export default _createRenderFn(template, walks, apply);