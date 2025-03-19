import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent(_scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("b");
    _$.fork(_scope1_id, "#text/0", rejectAfter(new Error("ERROR!"), 2), data => {
      const _scope3_id = _$.nextScopeId();
      _$.write(_$.escapeXML(data));
    });
    _$.write("c");
  }, _scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", error => {
        const _scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(error.message)}${_$.markResumeNode(_scope2_id, "#text/0")}`);
      }, _scope0_id)
    })
  });
  _$.write("d");
  _$.fork(_scope0_id, "#text/1", resolveAfter("e", 1), data => {
    const _scope4_id = _$.nextScopeId();
    _$.write(_$.escapeXML(data));
  });
  _$.write("f");
});