import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr({
    "selected": input.thing.selected
  })}>`);
  _$.dynamicTag($scope0_id, "#text/1", input.thing.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.thing.content */2));
  _$.write(`</div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* input.thing.selected */1))}`);
  _$.serializeGuard($serialize, /* input.thing.selected,input.thing.content */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});