import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/display-intersection.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  let dummy = {};
  _$.write(`<div>${_$.escapeXML((dummy, value))}${_$.markResumeNode($scope0_id, "#text/0")}</div>`);
  _$.writeScope($scope0_id, {
    value,
    dummy: _$.serializeIf($serialize, /* input.value */0) && dummy
  }, "__tests__/tags/display-intersection.marko", 0, {
    value: "1:10",
    dummy: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});