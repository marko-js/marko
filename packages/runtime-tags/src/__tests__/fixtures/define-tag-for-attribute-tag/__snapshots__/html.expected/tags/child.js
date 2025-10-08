import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_class({
    "selected": input.thing.selected
  })}>`);
  _._dynamic_tag($scope0_id, "#text/1", input.thing.content, {}, 0, 0, _._serialize_guard($serialize, /* input.thing.content */2));
  _._html(`</div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($serialize, /* input.thing.selected */1))}`);
  _._serialize_guard($serialize, /* input.thing.selected, input.thing.content */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});