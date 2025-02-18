import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const Foo = {
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
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
        unserializable: unserializable,
        test: test
      }, "__tests__/template.marko", "1:2", {
        unserializable: "2:10",
        test: "7:10"
      });
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  };
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", Foo, {});
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(Foo)
  }, "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);