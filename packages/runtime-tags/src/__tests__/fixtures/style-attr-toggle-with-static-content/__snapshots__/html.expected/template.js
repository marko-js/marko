import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let open = true;
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/0")}<div${_$.styleAttr({
    display: open ? undefined : "none",
    border: "1px solid black"
  })}>foo bar</div>${_$.markResumeNode($scope0_id, "#div/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_open");
  _$.writeScope($scope0_id, {
    open
  }, "__tests__/template.marko", 0, {
    open: "1:5"
  });
  _$.resumeClosestBranch($scope0_id);
});