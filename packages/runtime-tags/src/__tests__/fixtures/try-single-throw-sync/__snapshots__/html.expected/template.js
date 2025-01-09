import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("Before");
  _$.tryContent({
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope2_id = _$.nextScopeId();
      _$.write(`Inside${_$.escapeXML((() => {
        throw new Error("ERROR!");
      })())}`);
    }), "__tests__/template.marko_2_renderer", _scope0_id),
    catch: _$.attrTag({
      content: _$.register(/* @__PURE__ */_$.createRenderer(err => {
        const _scope1_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err.message)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      }), "__tests__/template.marko_1_renderer", _scope0_id)
    })
  });
  _$.write("After");
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);