import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<style>
  .test {
    content: ${_$.escapeStyle(count)}
  }
</style>${_$.markResumeNode(_scope0_id, "#style/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);