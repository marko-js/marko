import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    name,
    content
  } = input;
  _$.write(`${_$.commentSeparator(_$.serializeGuard($serialize, /* name */1))}${_$.escapeXML(name)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* name */1))}`);
  _$.dynamicTag($scope0_id, "#text/1", content, {}, 0, 0, _$.serializeGuard($serialize, /* content */2));
  _$.serializeGuard($serialize, /* name,content */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});