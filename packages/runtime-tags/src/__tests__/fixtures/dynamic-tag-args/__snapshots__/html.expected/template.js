import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let x = 1;
  _._html(`<button>Count: <!>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._dynamic_tag($scope0_id, "#text/2", tags[0], [x, 'foo'], 0, 1);
  _._dynamic_tag($scope0_id, "#text/3", tags[0], [false], 0, 1, 0);
  _._dynamic_tag($scope0_id, "#text/4", tags[0], [true], 0, 1, 0);
  _._dynamic_tag($scope0_id, "#text/5", tags[0], [...["spread1", "spread2"]], 0, 1, 0);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "3:6"
  });
  _._resume_branch($scope0_id);
});