import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";

_dynamicTag(_scope, baz, null);

import { dynamicTag as _dynamicTag, data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply(_scope) {
  _data(_scope, 0, c);
}

export const template = "<!>";
export const walks = "%b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);