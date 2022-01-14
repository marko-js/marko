import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _data(0, asset1);

  _data(1, asset2);
}

export const template = "<!> <!>";
export const walks = "%c%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);