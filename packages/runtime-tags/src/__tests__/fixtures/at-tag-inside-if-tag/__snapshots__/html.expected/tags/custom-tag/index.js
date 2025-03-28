import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    thing: {
      x,
      content
    }
  } = input;
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/0", content, {}, 0, 0, 1);
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
});