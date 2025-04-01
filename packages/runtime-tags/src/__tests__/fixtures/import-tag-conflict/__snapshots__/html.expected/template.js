import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`${_$.escapeXML(asset1)} ${_$.escapeXML(asset2)}`);
});