import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $bar2_closures = new Set();
  const bar = _$.register(function (test) {
    return input.c + test;
  }, "__tests__/template.marko_0/bar", $scope0_id);
  _$.resumeConditional(() => {
    if (input.a) {
      const $scope1_id = _$.nextScopeId();
      const foo = "foo";
      _$.resumeConditional(() => {
        if (input.b) {
          const $scope2_id = _$.nextScopeId();
          _$.write(`<div>${_$.escapeXML(bar(foo))}${_$.markResumeNode($scope2_id, "#text/0", _$.serializeGuard($serialize, /* input.c */3))}</div>`);
          _$.serializeGuard($serialize, /* input.c,input.b */0) && _$.writeSubscribe($bar2_closures, _$.writeScope($scope2_id, {
            _: _$.serializeIf($serialize, /* input.c */3) && _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:bar": _$.serializeIf($serialize, /* input.c */3) && 0
          }, "__tests__/template.marko", "6:3"));
          return 0;
        }
      }, $scope1_id, "#text/0", _$.serializeGuard($serialize, /* input.b */5), _$.serializeGuard($serialize, /* input.b */5), 0, 1);
      _$.serializeGuard($serialize, /* input.c,input.b */0) && _$.writeScope($scope1_id, {
        foo,
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:1", {
        foo: "4:9"
      });
      return 0;
    }
  }, $scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.a,input.b */1), _$.serializeGuard($serialize, /* input.a */4));
  _$.serializeGuard($serialize, /* input.c,input.a,input.b */2) && _$.writeScope($scope0_id, {
    input_c: input.c,
    input_b: _$.serializeIf($serialize, /* input.a */4) && input.b,
    bar: _$.serializeIf($serialize, /* input.a, input.b */1) && bar,
    "ClosureScopes:bar": _$.serializeIf($serialize, /* input.c */3) && $bar2_closures
  }, "__tests__/template.marko", 0, {
    input_c: ["input.c"],
    input_b: ["input.b"],
    bar: "1:7"
  });
});