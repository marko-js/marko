import * as _$ from "@marko/runtime-tags/debug/html";
import _layout from "./components/layout.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    name
  } = input;
  const _childScope = _$.peekNextScope();
  _layout({
    renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<h1>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}</h1>`);
      _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_name/subscriber");
      _$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "name": name,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko", _renderer);