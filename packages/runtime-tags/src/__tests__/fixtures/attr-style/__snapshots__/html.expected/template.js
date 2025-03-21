import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
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
  _customTag({
    style: {
      width: 100
    }
  });
  _customTag({
    style: "color: green"
  });
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/4", test, {
    style: {
      color: "green"
    },
    test: _$.attrTag({
      style: {
        color: "green"
      },
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, _scope0_id)
    })
  });
  _$.writeScope(_scope0_id, {
    "#childScope/1": _$.writeExistingScope(_childScope),
    "ConditionalScope:#text/4": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/4": _$.dynamicTagId(test)
  }, "__tests__/template.marko", 0);
});