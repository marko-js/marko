import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const Foo = {
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      const unserializable = {
        nested: {
          thing: Buffer.from("")
        }
      };
      const test = _$.register(function () {
        return unserializable;
      }, "__tests__/template.marko_1/test", _scope1_id);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_test");
      _$.writeScope(_scope1_id, {
        unserializable,
        test
      }, "__tests__/template.marko", "1:2", {
        unserializable: "2:10",
        test: "7:10"
      });
    })
  };
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", Foo, {});
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(Foo)
  }, "__tests__/template.marko", 0);
});