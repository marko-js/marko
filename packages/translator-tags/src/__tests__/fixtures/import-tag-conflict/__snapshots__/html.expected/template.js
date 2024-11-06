import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`${_$.escapeXML(asset1)} ${_$.escapeXML(asset2)}`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/import-tag-conflict/template.marko", _renderer);