import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.styleAttr({
    color: input.color
  })}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* input.color */0))}<div style=width:100px></div><div style="color: green"></div>`);
  const $childScope = _$.peekNextScopeId();
  _customTag({
    style: {
      color: input.color
    }
  }, {
    /* input.style, input.test */0: _$.serializeGuard($serialize, /* input.color */0),
    /* input.style */3: _$.serializeGuard($serialize, /* input.color */0)
  });
  _customTag({
    style: {
      width: "100px"
    }
  });
  _customTag({
    style: "color: green"
  });
  _$.dynamicTag($scope0_id, "#text/4", TestTag, {
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
  }, 0, 0, 0);
  _$.serializeGuard($serialize, /* input.color */0) && _$.writeScope($scope0_id, {
    "#childScope/1": _$.serializeIf($serialize, /* input.color */0) && _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});