import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/tag-b/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    class: className,
    other,
    content
  } = input;
  _$.write(`<div${_$.classAttr(className)}${_$.attr("data-other", other)}>B `);
  _$.dynamicTag($scope0_id, "#text/1", content, {}, 0, 0, _$.serializeGuard($serialize, 2));
  _$.write(`</div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, 0))}`);
  _$.serializeGuard($serialize, 1) && _$.writeScope($scope0_id, {}, "__tests__/tags/tag-b/index.marko", 0);
});