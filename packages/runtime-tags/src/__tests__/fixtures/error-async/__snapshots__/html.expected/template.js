import { rejectAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.fork(_scope0_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("failed");
  });
  _$.write("b");
});