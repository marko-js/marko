import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.writeEffect(_scope0_id, "__tests__/tags/thing.marko_0_input_value");
  _$.writeScope(_scope0_id, {
    input_value: input.value
  }, "__tests__/tags/thing.marko", 0, {
    input_value: ["input.value"]
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _renderer);