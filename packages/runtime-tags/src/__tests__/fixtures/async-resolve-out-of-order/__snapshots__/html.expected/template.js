import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.fork(_scope0_id, "#text/0", resolveAfter("b", 2), value => {
    const _scope1_id = _$.nextScopeId();
    _$.write(_$.escapeXML(value));
  });
  _$.write("c");
  _$.fork(_scope0_id, "#text/1", resolveAfter("d", 1), value => {
    const _scope2_id = _$.nextScopeId();
    _$.write(_$.escapeXML(value));
  });
  _$.write("e");
});