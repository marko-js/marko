import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const attrs = input;
  const {
    text
  } = input;
  const {
    onClick
  } = attrs;
  _$.write(`<button>${_$.escapeXML(text)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-alias/components/my-button.marko_0_onClick");
  _$.writeScope(_scope0_id, {
    "onClick": onClick
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input-alias/components/my-button.marko", _renderer);