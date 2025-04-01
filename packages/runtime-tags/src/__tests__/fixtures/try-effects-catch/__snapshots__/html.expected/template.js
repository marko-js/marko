import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.tryContent(_scope0_id, "#text/1", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(_$.escapeXML((() => {
      throw new Error("ERROR!");
    })()));
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "2:2");
  }, _scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", err => {
        const _scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err.message)}${_$.markResumeNode(_scope2_id, "#text/0")}`);
      }, _scope0_id)
    })
  });
  const el2 = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {}, "__tests__/template.marko", 0);
});