import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.styleAttr(input.style)}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* input.style */3))}`);
  _$.resumeConditional(() => {
    if (input.test) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<div${_$.styleAttr(input.test.style)} id=test>`);
      _$.dynamicTag($scope1_id, "#text/1", input.test.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.test.content */6));
      _$.write(`</div>${_$.markResumeNode($scope1_id, "#div/0", _$.serializeGuard($serialize, /* input.test.style */5))}`);
      _$.serializeGuard($serialize, /* input.test,input.test.style,input.test.content */2) && _$.writeScope($scope1_id, {
        _: _$.serializeIf($serialize, /* input.test.style, input.test.content */1) && _$.ensureScopeWithId($scope0_id)
      }, "__tests__/tags/custom-tag.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.test,input.test.style,input.test.content */2), _$.serializeGuard($serialize, /* input.test */4), 0, 1);
  _$.serializeGuard($serialize, /* input.style,input.test */0) && _$.writeScope($scope0_id, {
    input_test_style: _$.serializeIf($serialize, /* input.test */4) && input.test?.style,
    input_test_content: _$.serializeIf($serialize, /* input.test */4) && input.test?.content
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_test_style: ["input.test.style"],
    input_test_content: ["input.test.content"]
  });
});