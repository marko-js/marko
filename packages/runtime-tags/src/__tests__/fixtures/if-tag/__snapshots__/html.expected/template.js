import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.resumeConditional(() => {
    if (input.a + input.b) {
      const $scope1_id = _$.nextScopeId();
      _$.write("Hello");
      _$.serializeGuard($serialize, /* input.a,input.b */0) && _$.writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.a,input.b */0), _$.serializeGuard($serialize, /* input.a,input.b */0));
  _$.resumeConditional(() => {
    if (input.a, input.b) {
      const $scope2_id = _$.nextScopeId();
      _$.write("World");
      _$.serializeGuard($serialize, /* input.a,input.b */0) && _$.writeScope($scope2_id, {}, "__tests__/template.marko", "5:2");
      return 0;
    }
  }, $scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.a,input.b */0), _$.serializeGuard($serialize, /* input.a,input.b */0));
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (input.x) {
      const $scope3_id = _$.nextScopeId();
      _$.write("A");
      _$.serializeGuard($serialize, /* input.x,input.y */1) && _$.writeScope($scope3_id, {}, "__tests__/template.marko", "10:4");
      return 0;
    } else if (input.y) {
      const $scope4_id = _$.nextScopeId();
      _$.write("B");
      _$.serializeGuard($serialize, /* input.x,input.y */1) && _$.writeScope($scope4_id, {}, "__tests__/template.marko", "13:4");
      return 1;
    } else {
      const $scope5_id = _$.nextScopeId();
      _$.write("C");
      _$.serializeGuard($serialize, /* input.x,input.y */1) && _$.writeScope($scope5_id, {}, "__tests__/template.marko", "16:4");
      return 2;
    }
  }, $scope0_id, "#div/2", _$.serializeGuard($serialize, /* input.x,input.y */1), _$.serializeGuard($serialize, /* input.x,input.y */1), "</div>");
  _$.serializeGuard($serialize, /* input.a,input.b,input.x,input.y */2) && _$.writeScope($scope0_id, {
    input_a: _$.serializeIf($serialize, /* input.b */4) && input.a,
    input_b: _$.serializeIf($serialize, /* input.a */3) && input.b,
    input_x: _$.serializeIf($serialize, /* input.y */6) && input.x,
    input_y: _$.serializeIf($serialize, /* input.x */5) && input.y
  }, "__tests__/template.marko", 0, {
    input_a: ["input.a"],
    input_b: ["input.b"],
    input_x: ["input.x"],
    input_y: ["input.y"]
  });
});