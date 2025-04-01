import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr({
    "selected": input.thing.selected
  })}>`);
  _$.dynamicTag(_scope0_id, "#text/1", input.thing.content, {}, 0, 0, 1);
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});