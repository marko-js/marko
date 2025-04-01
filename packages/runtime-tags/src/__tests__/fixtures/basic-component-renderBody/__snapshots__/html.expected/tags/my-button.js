import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/my-button.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    onClick,
    content
  } = input;
  _$.write("<button>");
  _$.dynamicTag(_scope0_id, "#text/1", content, {}, 0, 0, 1);
  _$.write(`</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _$.writeScope(_scope0_id, {
    onClick
  }, "__tests__/tags/my-button.marko", 0, {
    onClick: "1:10"
  });
});