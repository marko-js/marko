import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`${_$.escapeXML(asset1)} ${_$.escapeXML(asset2)}`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);