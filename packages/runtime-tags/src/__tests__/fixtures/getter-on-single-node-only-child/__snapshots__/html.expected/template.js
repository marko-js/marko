import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $ul = _._el($scope0_id, "__tests__/template.marko_0/#ul");
  let items = [0, 1];
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}<ul>`);
  _._for_of(items, item => {
    const $scope1_id = _._scope_id();
    _._html(`<li>${_._escape(item)}${_._el_resume($scope1_id, "#text/0")}</li>`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "7:4");
  }, 0, $scope0_id, "#ul/1", /* items */1, 1, /* items */1, "</ul>", 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._scope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _._resume_branch($scope0_id);
});