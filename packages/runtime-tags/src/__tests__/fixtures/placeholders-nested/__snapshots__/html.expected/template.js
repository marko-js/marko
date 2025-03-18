import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent(_scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("b");
    _$.fork(resolveAfter("c", 2), data => {
      const _scope3_id = _$.nextScopeId();
      _$.write(_$.escapeXML(data));
    });
    _$.write("d");
    _$.tryContent(_scope1_id, "#text/1", _$.registerContent("__tests__/template.marko_4_renderer", () => {
      const _scope4_id = _$.nextScopeId();
      _$.write("e");
      _$.fork(resolveAfter("f", 3), data => {
        const _scope6_id = _$.nextScopeId();
        _$.write(_$.escapeXML(data));
      });
      _$.write("g");
    }, _scope1_id), {
      placeholder: _$.attrTag({
        content: _$.registerContent("__tests__/template.marko_5_renderer", () => {
          const _scope5_id = _$.nextScopeId();
          _$.write("_A_");
        }, _scope1_id)
      })
    });
  }, _scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const _scope2_id = _$.nextScopeId();
        _$.write("_B_");
      }, _scope0_id)
    })
  });
  _$.write("h");
  _$.fork(resolveAfter("i", 1), data => {
    const _scope7_id = _$.nextScopeId();
    _$.write(_$.escapeXML(data));
  });
  _$.write("j");
});