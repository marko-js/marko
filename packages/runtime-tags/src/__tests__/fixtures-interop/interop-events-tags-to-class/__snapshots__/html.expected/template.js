import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _classCounter from "./components/class-counter.marko";
_s(_classCounter, "__tests__/components/class-counter.marko");
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._dynamic_tag($scope0_id, "#text/0", _classCounter, {
    onCount: _._resume(function (newCount) {
      count = newCount;
    }, "__tests__/template.marko_0/onCount", $scope0_id)
  }, 0, 0, 0);
  _._html(`<div id=tags-api>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</div>`);
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});