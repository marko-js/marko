import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<button id=tags${_$.attr("data-parent", input.count)}>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-interop/src/__tests__/fixtures/interop-class-to-tags-import/components/tags-counter.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-class-to-tags-import/components/tags-counter.marko");