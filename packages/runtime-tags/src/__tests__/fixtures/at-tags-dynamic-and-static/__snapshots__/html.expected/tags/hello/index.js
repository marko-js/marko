import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/hello/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.resumeForOf(input.item, item => {
    const $scope1_id = _$.nextScopeId();
    _$.dynamicTag($scope1_id, "#text/0", item.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.item */1));
    _$.serializeGuard($serialize, /* input.item */1) && _$.writeScope($scope1_id, {}, "__tests__/tags/hello/index.marko", "1:1");
  }, 0, $scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.item */1), _$.serializeGuard($serialize, /* input.item */1));
  _$.dynamicTag($scope0_id, "#text/1", input.other, {}, 0, 0, _$.serializeGuard($serialize, /* input.other */2));
  _$.serializeGuard($serialize, /* input.item,input.other */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});