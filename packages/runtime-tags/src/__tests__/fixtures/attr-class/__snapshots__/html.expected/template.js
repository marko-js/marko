import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    c,
    d
  } = input;
  _$.write(`<div${_$.classAttr(["a", {
    b: c,
    d
  }])}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* c,d */2))}<div class="a b"></div><div class="a b c"></div>`);
  const $childScope = _$.peekNextScopeId();
  _customTag({
    class: ["a", {
      b: c,
      d
    }]
  }, _$.serializeGuard($serialize, /* c,d */2));
  _customTag({
    class: ["a", false, "b"]
  });
  _$.dynamicTag($scope0_id, "#text/3", input.test, {
    class: ["a", {
      b: c,
      d
    }],
    test: _$.attrTag({
      class: ["a", {
        b: c,
        d
      }],
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, $scope0_id)
    })
  }, 0, 0, _$.serializeGuard($serialize, /* input.test,c,d */3));
  _$.serializeGuard($serialize, /* input.test,c,d */3) && _$.writeScope($scope0_id, {
    input_test: _$.serializeIf($serialize, /* input.c, input.d */2) && input.test,
    c: _$.serializeIf($serialize, /* input.test, input.d */1) && c,
    d: _$.serializeIf($serialize, /* input.test, input.c */0) && d,
    "#childScope/1": _$.serializeIf($serialize, /* input.c, input.d */2) && _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    input_test: ["input.test"],
    c: "2:10",
    d: "2:13"
  });
});