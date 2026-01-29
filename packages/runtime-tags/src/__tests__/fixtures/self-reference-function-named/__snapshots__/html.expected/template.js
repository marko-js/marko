import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let items = [0, 1, 2];
  const sum = function sum(i = 0) {
    return i >= items.length ? 0 : items[i] + sum(i + 1);
  };
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}<div>${_._escape(sum())}${_._el_resume($scope0_id, "#text/1")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._scope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _._resume_branch($scope0_id);
});