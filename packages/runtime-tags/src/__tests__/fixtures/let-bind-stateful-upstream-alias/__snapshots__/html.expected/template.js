import _store from "./tags/store.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  let store = _store({
    value: ["Learn Marko", "Make a Website"]
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_store/var");
  let list = store.list;
  _._html(`<button>Clear</button>${_._el_resume($scope0_id, "#button/2")}<ul>`);
  _._for_of(list, item => {
    const $scope1_id = _._scope_id();
    _._html(`<li>${_._escape(item)}${_._el_resume($scope1_id, "#text/0")}</li>`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "10:4");
  }, 0, $scope0_id, "#ul/3", /* store */1, /* store */1, /* store */1, "</ul>", 1);
  _._script($scope0_id, "__tests__/template.marko_0_store_clear");
  _._scope($scope0_id, {
    store_clear: store?.clear,
    "#childScope/0": _._existing_scope($childScope),
    "TagVariableChange:list": store.listChange || void 0
  }, "__tests__/template.marko", 0, {
    store_clear: ["store.clear", "1:8"]
  });
  _._resume_branch($scope0_id);
});