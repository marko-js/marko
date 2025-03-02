import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("Before");
  _$.tryContent({
    content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
      const _scope2_id = _$.nextScopeId();
      _$.write(`Inside${_$.escapeXML((() => {
        throw new Error("ERROR!");
      })())}`);
    }, _scope0_id),
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_1_renderer", err => {
        const _scope1_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err.message)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      }, _scope0_id)
    })
  });
  _$.write("After");
});