import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _ from "@marko/runtime-tags/debug/html";
import _classCounter from "./components/class-counter.marko";
_s(_classCounter, "__tests__/components/class-counter.marko");
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button id=tags>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._dynamic_tag($scope0_id, "#text/2", _classCounter, {
    count: count
  });
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});