import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let selected = false;
  const myThing = {
    selected: selected,
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html("<span>The thing</span>");
    })
  };
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(1);
  _child({
    thing: myThing
  });
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_selected");
  _._scope($scope0_id, {
    selected,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    selected: "1:6"
  });
  _._resume_branch($scope0_id);
});