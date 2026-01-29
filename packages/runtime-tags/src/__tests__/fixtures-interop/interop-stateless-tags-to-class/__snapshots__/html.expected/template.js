import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _myButton from "./components/my-button/index.marko";
_s(_myButton, "__tests__/components/my-button/index.marko");
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", _myButton, {
    onClick: _._resume(function () {
      document.getElementById("display").innerHTML = "Hi!";
    }, "__tests__/template.marko_0/onClick")
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("Say Hi");
  }, $scope0_id), 0, 0);
  _._html("<span id=display></span>");
});