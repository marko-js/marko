import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    onClick,
    content
  } = input;
  _$.write("<button>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", content, {});
  _$.write(`</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _$.debug(_$.writeScope(_scope0_id, {
    "onClick": onClick,
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(content)
  }), "__tests__/tags/my-button.marko", 0, {
    "onClick": "1:10",
    "content": "1:19"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", _renderer);