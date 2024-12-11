import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const outer = true;
  const inner = true;
  const count = 0;
  _$.write(`<div><button id=outer></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId2, _ifRenderer2;
  if (outer) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.markResumeScopeStart(_scope1_id)}<button id=inner></button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    let _ifScopeId, _ifRenderer;
    if (inner) {
      const _scope2_id = _$.nextScopeId();
      _$.write(`<button id=count>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
      _$.writeEffect(_scope2_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count/subscriber");
      _$.writeEffect(_scope2_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count");
      _$.writeScope(_scope2_id, {
        "_": _$.ensureScopeWithId(_scope1_id)
      });
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _$.write(_$.markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _ifScopeId));
    _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_inner");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id),
      "#text/1(": _ifRenderer,
      "#text/1!": _$.getScopeById(_ifScopeId)
    });
    _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_renderer");
    _ifScopeId2 = _scope1_id;
  }
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_0_outer");
  _$.writeScope(_scope0_id, {
    "outer": outer,
    "inner": inner,
    "count": count,
    "#text/1(": _ifRenderer2,
    "#text/1!": _$.getScopeById(_ifScopeId2)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko", _renderer);