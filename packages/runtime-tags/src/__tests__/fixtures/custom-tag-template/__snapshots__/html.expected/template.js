import _hello from "./hello.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _hello({
    name: "Frank"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);