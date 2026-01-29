import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  let liveCount = 0;
  let count = 0;
  _2._html(`<button>Before</button>${_2._el_resume($scope0_id, "#button/0")}<div>${_2._escape(liveCount)}${_2._el_resume($scope0_id, "#text/1")}</div>`);
  _2._script($scope0_id, "__tests__/template.marko_0");
  _2._scope($scope0_id, {
    "TagVariableChange:count": _2._resume(function (v) {
      liveCount = v;
    }, "__tests__/template.marko_0/valueChange", $scope0_id) || void 0
  }, "__tests__/template.marko", 0);
  _2._resume_branch($scope0_id);
});