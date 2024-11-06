import log from "./test-log";
function fromStatic() {
  log.static += "rendered";
}
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.register(fromStatic, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromStatic");
  log.block += "rendered";
  const fromConst = _$.register(function () {
    log.const += "rendered";
  }, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromConst", _scope0_id);
  fromConst();
  const str = "rendered";
  log.let += str;
  fromStatic();
  const logOutput = JSON.stringify(log);
  _$.write(`<!>${_$.escapeXML(logOutput)}${_$.markResumeNode(_scope0_id, "#text/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0");
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");