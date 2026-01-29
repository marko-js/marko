import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let items = ["hello"];
  _._html("<div>");
  _._for_of(items, () => {
    const $scope1_id = _._scope_id();
    _._html(`<button>Test</button>${_._el_resume($scope1_id, "#button/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1_items");
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "4:4");
  }, 0, $scope0_id, "#text/0", /* items */1, /* items */1, /* items */1, 0, 1);
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/1")}</div>`);
  _._scope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _._resume_branch($scope0_id);
});