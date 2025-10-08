import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/tag-b/index.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    class: className,
    other,
    content
  } = input;
  _._html(`<div${_._attr_class(className)}${_._attr("data-other", other)}>B `);
  _._dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _._serialize_guard($serialize, /* input.content */2));
  _._html(`</div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($serialize, /* input.class, input.other */0))}`);
  _._serialize_guard($serialize, /* input.class, input.other, input.content */1) && _._scope($scope0_id, {}, "__tests__/tags/tag-b/index.marko", 0);
});