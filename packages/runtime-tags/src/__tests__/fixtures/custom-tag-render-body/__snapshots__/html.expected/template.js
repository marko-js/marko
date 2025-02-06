import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child/index.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _child({
    name: "World",
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write("This is the body content");
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);