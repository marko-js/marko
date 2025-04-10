import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    color,
    test
  } = input;
  _$.write(`<div${_$.styleAttr({
    color: color
  })}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, 1))}<div style=width:100px></div><div style="color: green"></div>`);
  const $childScope = _$.peekNextScopeId();
  _customTag({
    style: {
      color: color
    }
  }, _$.serializeGuard($serialize, 1));
  _customTag({
    style: {
      width: 100
    }
  });
  _customTag({
    style: "color: green"
  });
  _$.dynamicTag($scope0_id, "#text/4", test, {
    style: {
      color: "green"
    },
    test: _$.attrTag({
      style: {
        color: "green"
      },
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, $scope0_id)
    })
  }, 0, 0, _$.serializeGuard($serialize, 2));
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {
    "#childScope/1": _$.serializeIf($serialize, 1) && _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});