import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let id = 0;
  let items = [];
  _._html("<div>");
  _._for_of(items, item => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(item)}${_._el_resume($scope1_id, "#text/0")}`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "5:4");
  }, 0, $scope0_id, "#text/0", /* items */1, /* items */1, /* items */1, 0, 1);
  _._html(`<button id=add>Add</button>${_._el_resume($scope0_id, "#button/1")}<button id=remove>Remove</button>${_._el_resume($scope0_id, "#button/2")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._script($scope0_id, "__tests__/template.marko_0_id_items");
  _._scope($scope0_id, {
    id,
    items
  }, "__tests__/template.marko", 0, {
    id: "2:8",
    items: "3:8"
  });
  _._resume_branch($scope0_id);
});