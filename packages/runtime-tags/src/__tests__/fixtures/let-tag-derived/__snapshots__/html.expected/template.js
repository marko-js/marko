import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    a
  } = input;
  let b = a * 2;
  _$.write(`<button>Increment</button>${_$.markResumeNode($scope0_id, "#button/0")}${_$.escapeXML(a)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, /* a */0))} <!>${_$.escapeXML(b)}${_$.markResumeNode($scope0_id, "#text/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_b");
  _$.writeScope($scope0_id, {
    b
  }, "__tests__/template.marko", 0, {
    b: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});