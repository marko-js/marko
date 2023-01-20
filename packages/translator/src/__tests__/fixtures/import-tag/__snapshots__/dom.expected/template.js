import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { data as _data, conditional as _conditional, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, _scope => baz);
const _setup = _scope => {
  _data(_scope["#text/1"], c);
  _notifySignal(_scope, _dynamicTagName);
};
export const template = "<!><!>";
export const walks = /* replace, over(1), replace, over(1) */"%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);