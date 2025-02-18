import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    el
  } = input;
  _$.writeEffect(_scope0_id, "__tests__/tags/hello-setter.marko_0_el");
  _$.writeScope(_scope0_id, {
    el: el
  }, "__tests__/tags/hello-setter.marko", 0, {
    el: "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello-setter.marko", _renderer);