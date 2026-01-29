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
  const {
    list,
    clear
  } = store;
  _._html(`<button>Clear</button>${_._el_resume($scope0_id, "#button/2")}<ul>`);
  _._for_of(list, item => {
    const $scope1_id = _._scope_id();
    _._html(`<li>${_._escape(item)}${_._el_resume($scope1_id, "#text/0")}</li>`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "10:4");
  }, 0, $scope0_id, "#ul/3", /* store */1, /* store */1, /* store */1, "</ul>", 1);
  _._script($scope0_id, "__tests__/template.marko_0_clear");
  _._scope($scope0_id, {
    clear,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    clear: "6:16"
  });
});