import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag/index.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    thing: {
      x,
      content
    }
  } = input;
  _._dynamic_tag($scope0_id, "#text/0", content, {}, 0, 0, _._serialize_guard($serialize, /* input.thing.content */2));
  _._html(`<div>${_._escape(x)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($serialize, /* input.thing.x */1))}</div>`);
  _._serialize_guard($serialize, /* input.thing.x, input.thing.content */0) && _._scope($scope0_id, {}, "__tests__/tags/custom-tag/index.marko", 0);
});