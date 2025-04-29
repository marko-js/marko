import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
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
  }])}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* c,d */0))}<div class="a b"></div><div class="a b c"></div>`);
  const $childScope = _$.peekNextScopeId();
  _customTag({
    class: ["a", {
      b: c,
      d
    }]
  }, {
    /* input.class, input.test */0: _$.serializeGuard($serialize, /* c,d */0),
    /* input.class */3: _$.serializeGuard($serialize, /* c,d */0)
  });
  _customTag({
    class: ["a", false, "b"]
  });
  _$.dynamicTag($scope0_id, "#text/3", TestTag, {
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
  }, 0, 0, _$.serializeGuard($serialize, /* c,d */0));
  _$.serializeGuard($serialize, /* c,d */0) && _$.writeScope($scope0_id, {
    c: _$.serializeIf($serialize, /* input.d */2) && c,
    d: _$.serializeIf($serialize, /* input.c */1) && d,
    "#childScope/1": _$.serializeIf($serialize, /* input.c, input.d */0) && _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    c: "4:10",
    d: "4:13"
  });
});