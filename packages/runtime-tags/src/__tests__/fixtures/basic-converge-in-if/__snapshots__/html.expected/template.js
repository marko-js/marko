import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const a = 0;
  const b = 0;
  let _ifScopeId;
  if (true) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(a + b)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.markResumeCleanup(_scope1_id);
    _ifScopeId = _scope1_id;
  }
  _$.writeScope(_scope0_id, {
    "a": a,
    "b": b,
    "#text/0!": _$.getScopeById(_ifScopeId)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);