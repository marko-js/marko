function noop(_) {}
import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  let a = 0;
  let b = 0;
  let c = {};
  let d = 0;
  let e = [];
  let unused = 0;
  _2._html(`<button><pre>a    1    <!>${_2._escape(a)}${_2._el_resume($scope0_id, "#text/1")}</pre><pre>b    2    <!>${_2._escape(b)}${_2._el_resume($scope0_id, "#text/2")}</pre><pre>c  {c:4}  <!>${_2._escape(JSON.stringify(c))}${_2._el_resume($scope0_id, "#text/3")}</pre><pre>d    7    <!>${_2._escape(d)}${_2._el_resume($scope0_id, "#text/4")}</pre><pre>f   [9]   <!>${_2._escape(JSON.stringify(e))}${_2._el_resume($scope0_id, "#text/5")}</pre></button>${_2._el_resume($scope0_id, "#button/0")}`);
  _2._script($scope0_id, "__tests__/template.marko_0");
  _2._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _2._resume_branch($scope0_id);
});