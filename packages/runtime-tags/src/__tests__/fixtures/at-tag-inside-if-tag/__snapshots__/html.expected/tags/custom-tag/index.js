import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    thing: {
      x,
      content
    }
  } = input;
  _$.dynamicTag($scope0_id, "#text/0", content, {}, 0, 0, _$.serializeGuard($serialize, 2));
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, 1))}</div>`);
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {}, "__tests__/tags/custom-tag/index.marko", 0);
});