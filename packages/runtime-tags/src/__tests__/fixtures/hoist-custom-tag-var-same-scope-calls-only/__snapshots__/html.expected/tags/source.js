import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/source.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  const $return = _._resume(() => ({
    setHtml(value) {
      (el => el())(_._el_read_error).innerHTML = value;
    },
    addClass(value) {
      (el => el())(_._el_read_error).classList.add(value);
    }
  }), "__tests__/tags/source.marko_0/_return", $scope0_id);
  _._scope($scope0_id, {}, "__tests__/tags/source.marko", 0);
  return $return;
});