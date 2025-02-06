import * as _$ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _hello({});
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);