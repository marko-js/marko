import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    color,
    test
  } = input;
  _$.write(`<div${_$.styleAttr({
    color: color
  })}></div>${_$.markResumeNode(_scope0_id, "#div/0")}<div style=width:100px></div><div style="color: green"></div>`);
  const _childScope = _$.peekNextScope();
  _customTag({
    style: {
      color: color
    }
  });
  const _childScope2 = _$.peekNextScope();
  _customTag({
    style: {
      width: 100
    }
  });
  const _childScope3 = _$.peekNextScope();
  _customTag({
    style: "color: green"
  });
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, test, {
    style: {
      color: "green"
    },
    test: _$.attrTag({
      style: {
        color: "green"
      },
      renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }), "packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko_1_renderer", _scope0_id)
    })
  });
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/4"));
  _$.writeScope(_scope0_id, {
    "#childScope/1": _$.writeExistingScope(_childScope),
    "#childScope/2": _$.writeExistingScope(_childScope2),
    "#childScope/3": _$.writeExistingScope(_childScope3),
    "#text/4!": _$.writeExistingScope(_dynamicScope),
    "#text/4(": _$.normalizeDynamicRenderer(test)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko", _renderer);