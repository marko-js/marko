import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.resumeForTo(input.to, input.from, input.step, n => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(n)}${_$.markResumeNode($scope1_id, "#text/0", _$.serializeGuard($serialize, /* input.from,input.to,input.step */3))}, `);
    _$.serializeGuard($serialize, /* input.from,input.to,input.step */3) && _$.writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
  }, 0, $scope0_id, "#div/0", _$.serializeGuard($serialize, /* input.from,input.to,input.step */3), _$.serializeGuard($serialize, /* input.from,input.to,input.step */3), 1);
  _$.write("</div>");
  _$.serializeGuard($serialize, /* input.from,input.to,input.step */3) && _$.writeScope($scope0_id, {
    input_from: _$.serializeIf($serialize, /* input.to, input.step */2) && input.from,
    input_to: _$.serializeIf($serialize, /* input.from, input.step */1) && input.to,
    input_step: _$.serializeIf($serialize, /* input.from, input.to */0) && input.step
  }, "__tests__/template.marko", 0, {
    input_from: ["input.from"],
    input_to: ["input.to"],
    input_step: ["input.step"]
  });
});