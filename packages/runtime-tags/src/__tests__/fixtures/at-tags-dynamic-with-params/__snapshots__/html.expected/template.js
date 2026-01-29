import * as _ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = true;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(/* x */1);
  let $item;
  if (x) {
    $item = _.attrTag({
      content: _._content("__tests__/template.marko_1_content", y => {
        const $scope1_reason = _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html(`y: ${_._sep(_._serialize_guard($scope1_reason, /* y */0))}${_._escape(y)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* y */0))}`);
        _._serialize_if($scope1_reason, /* y */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "4:10");
      })
    });
  }
  _hello({
    item: $item
  });
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _._resume_branch($scope0_id);
});