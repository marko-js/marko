import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    content,
    ...rest
  } = input;
  _._html(`<div${_._attrs(rest, "#div/0", $scope0_id, "div")}>`);
  _._dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.content */1));
  _._html(`</div>${_._el_resume($scope0_id, "#div/0")}<div>${_._escape(Object.keys(input))}${_._el_resume($scope0_id, "#text/2", _._serialize_guard($scope0_reason, /* input */0))}</div>`);
  _._script($scope0_id, "__tests__/tags/child.marko_0_rest");
  _._scope($scope0_id, {
    rest
  }, "__tests__/tags/child.marko", 0, {
    rest: "1:22"
  });
});