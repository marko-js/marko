import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (value) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode($scope1_id, "#text/0", _$.serializeGuard($serialize, /* value */0))}</span>`);
      _$.serializeGuard($serialize, /* value */0) && _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0", _$.serializeGuard($serialize, /* value */0), _$.serializeGuard($serialize, /* value */0), 0, 1);
  _$.write("<span></span><span></span></div>");
  _$.serializeGuard($serialize, /* value */0) && _$.writeScope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:10"
  });
});