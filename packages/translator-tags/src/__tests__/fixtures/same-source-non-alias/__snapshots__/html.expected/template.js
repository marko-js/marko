function createWrapper(a) {
  return {
    a
  };
}
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.register(createWrapper, "packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko_0/createWrapper");
  const count = 0;
  const {
    a,
    a: b
  } = createWrapper(count);
  _$.write(`<button>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko", _renderer);