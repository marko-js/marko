import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let open = true;
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}<div${_._attr_style({
    display: open ? undefined : "none",
    border: "1px solid black"
  })}>foo bar</div>${_._el_resume($scope0_id, "#div/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_open");
  _._scope($scope0_id, {
    open
  }, "__tests__/template.marko", 0, {
    open: "1:5"
  });
  _._resume_branch($scope0_id);
});