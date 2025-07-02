import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let bar = 0;
  const {
    foo,
    fooChange: $fooChange
  } = {
    foo: 1,
    fooChange: _$.register(function (v) {
      bar = v;
    }, "__tests__/template.marko_0/foo", $scope0_id)
  };
  _$.write(`<button>${_$.escapeXML(foo)}:<!>${_$.escapeXML(bar)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_bar_$fooChange");
  _$.writeScope($scope0_id, {
    bar,
    $fooChange
  }, "__tests__/template.marko", 0, {
    bar: "1:5",
    $fooChange: "9:20"
  });
  _$.resumeClosestBranch($scope0_id);
});