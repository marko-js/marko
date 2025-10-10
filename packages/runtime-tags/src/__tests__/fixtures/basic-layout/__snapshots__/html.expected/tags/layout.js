import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/layout.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    content
  } = input;
  _._html("<body>");
  _._dynamic_tag($scope0_id, "#text/0", content, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.content */0));
  _._trailers("</body>");
  _._serialize_guard($scope0_reason, /* input.content */0) && _._scope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});