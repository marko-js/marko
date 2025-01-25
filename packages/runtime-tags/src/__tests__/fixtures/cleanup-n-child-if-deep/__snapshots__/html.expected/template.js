import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const showOuter = true;
  const showMiddle = true;
  const showInner = true;
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", _scope0_id);
  _$.write(`<button id=outer>Toggle Outer</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_$.markResumeNode(_scope0_id, "#button/2")}<pre></pre>${_$.markResumeNode(_scope0_id, "#pre/3")}`);
  let _ifScopeId3, _ifRenderer3;
  if (showOuter) {
    const _scope1_id = _$.nextScopeId();
    _$.write("<div>");
    const _childScope = _$.peekNextScope();
    _child({
      write: write,
      name: "Outer"
    });
    let _ifScopeId2, _ifRenderer2;
    if (showMiddle) {
      const _scope2_id = _$.nextScopeId();
      _$.write("<div>");
      const _childScope2 = _$.peekNextScope();
      _child({
        write: write,
        name: "Middle"
      });
      let _ifScopeId, _ifRenderer;
      if (showInner) {
        const _scope3_id = _$.nextScopeId();
        _$.write(_$.markResumeScopeStart(_scope3_id));
        const _childScope3 = _$.peekNextScope();
        _child({
          write: write,
          name: "Inner"
        });
        _$.writeScope(_scope3_id, {
          "#childScope/0": _$.writeExistingScope(_childScope3)
        });
        _$.markResumeCleanup(_scope3_id);
        _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_3_renderer");
        _ifScopeId = _scope3_id;
      }
      _$.write(`${_$.markResumeControlEnd(_scope2_id, "#text/1")}</div>`);
      _$.writeEffect(_scope2_id, "__tests__/template.marko_2_showInner/subscriber");
      _$.writeScope(_scope2_id, {
        "#childScope/0": _$.writeExistingScope(_childScope2),
        "#text/1(": _ifRenderer,
        "#text/1!": _$.getScopeById(_ifScopeId),
        "_": _$.ensureScopeWithId(_scope1_id)
      });
      _$.markResumeCleanup(_scope2_id);
      _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
      _ifScopeId2 = _scope2_id;
    }
    _$.write(`${_$.markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _ifScopeId2)}</div>`);
    _$.writeScope(_scope1_id, {
      "#childScope/0": _$.writeExistingScope(_childScope),
      "_": _$.ensureScopeWithId(_scope0_id),
      "#text/1(": _ifRenderer2,
      "#text/1!": _$.getScopeById(_ifScopeId2)
    });
    _$.markResumeCleanup(_scope1_id);
    _$.register(_ifRenderer3 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId3 = _scope1_id;
  }
  _$.write(_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/4", _ifScopeId3));
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showInner");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showMiddle");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showOuter");
  _$.writeScope(_scope0_id, {
    "showOuter": showOuter,
    "showMiddle": showMiddle,
    "showInner": showInner,
    "write": write,
    "#text/4(": _ifRenderer3,
    "#text/4!": _$.getScopeById(_ifScopeId3)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);