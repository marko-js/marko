import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let open = true;
  let list = [1, 2, 3];
  _._html(`<ul${_._attr("hidden", !open)}>`);
  _._for_of(list, x => {
    const $scope1_id = _._scope_id();
    _._html(`<li>${_._escape(x)}${_._el_resume($scope1_id, "#text/0")}</li>`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "4:4");
  }, function (x) {
    return x;
  }, $scope0_id, "#ul/0", /* list */1, /* open, list */1, /* list */1, "</ul>", 1);
  _._html(`<button id=toggle>Toggle</button>${_._el_resume($scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_list");
  _._script($scope0_id, "__tests__/template.marko_0_open");
  _._scope($scope0_id, {
    open,
    list
  }, "__tests__/template.marko", 0, {
    open: "1:6",
    list: "2:6"
  });
  _._resume_branch($scope0_id);
});