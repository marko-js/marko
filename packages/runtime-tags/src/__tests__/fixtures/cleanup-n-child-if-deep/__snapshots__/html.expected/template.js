import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _showInner_closures = new Set();
  let showOuter = true;
  let showMiddle = true;
  let showInner = true;
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", _scope0_id);
  _$.write(`<button id=outer>Toggle Outer</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_$.markResumeNode(_scope0_id, "#button/2")}<pre></pre>${_$.markResumeNode(_scope0_id, "#pre/3")}`);
  _$.resumeSingleNodeConditional(() => {
    if (showOuter) {
      const _scope1_id = _$.nextScopeId();
      _$.write("<div>");
      _child({
        write: write,
        name: "Outer"
      });
      _$.resumeSingleNodeConditional(() => {
        if (showMiddle) {
          const _scope2_id = _$.nextScopeId();
          _$.write("<div>");
          _child({
            write: write,
            name: "Middle"
          });
          _$.resumeConditional(() => {
            if (showInner) {
              const _scope3_id = _$.nextScopeId();
              _child({
                write: write,
                name: "Inner"
              });
              return 0;
            }
          }, _scope2_id, "#text/1", 1);
          _$.write("</div>");
          _$.writeSubscribe(_showInner_closures, _$.writeScope(_scope2_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "ClosureSignalIndex:showInner": 0
          }, "__tests__/template.marko", "14:6"));
          return 0;
        }
      }, _scope1_id, "#text/1", 1);
      _$.write("</div>");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "11:2");
      return 0;
    }
  }, _scope0_id, "#text/4", 1);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showInner");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showMiddle");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showOuter");
  _$.writeScope(_scope0_id, {
    showOuter,
    showMiddle,
    showInner,
    write,
    "ClosureScopes:showInner": _showInner_closures
  }, "__tests__/template.marko", 0, {
    showOuter: "1:6",
    showMiddle: "2:6",
    showInner: "3:6",
    write: "9:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});