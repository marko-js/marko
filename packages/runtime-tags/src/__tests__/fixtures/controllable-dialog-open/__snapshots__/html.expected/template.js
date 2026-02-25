import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let open = true;
  _._html(`<dialog${_._attr_dialog_open($scope0_id, "#dialog/0", open, _._resume(_new_open => {
    open = _new_open;
  }, "__tests__/template.marko_0/openChange", $scope0_id))}></dialog>${_._el_resume($scope0_id, "#dialog/0")}<span>${_._escape(String(open))}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});