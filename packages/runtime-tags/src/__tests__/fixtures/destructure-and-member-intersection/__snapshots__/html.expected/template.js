import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    a,
    b
  } = input;
  _$.write(`<div>${_$.escapeXML(input.a)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.a */2))}${_$.commentSeparator(_$.serializeGuard($serialize, /* a,b */0))}${_$.escapeXML(a + b)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, /* a,b */0))}</div>`);
  _$.serializeGuard($serialize, /* input.a,a,b */1) && _$.writeScope($scope0_id, {
    input_a: _$.serializeIf($serialize, /* input.b */4) && input.a,
    b: _$.serializeIf($serialize, /* input.a */3) && b
  }, "__tests__/template.marko", 0, {
    input_a: "1:9",
    b: "1:12"
  });
});