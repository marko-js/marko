import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let show = true;
  const onCount = _$.register(function (count) {
    show = count < 1;
  }, "__tests__/template.marko_0/onCount", _scope0_id);
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("<div>");
      _counter({
        onCount: onCount
      });
      _$.write("</div>");
      return 0;
    }
  }, _scope0_id, "#div/0", 1, 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    onCount
  }, "__tests__/template.marko", 0, {
    onCount: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});