import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml/hoist");
  const _what_content_subscribers = new Set();
  _thing({
    what: _$.attrTag({
      content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope1_id = _$.nextScopeId();
        const _childScope = _$.peekNextScope();
        const setHtml = _child({});
        _$.setTagVar(_scope1_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_1_setHtml/var");
        _$.writeSubscribe(_what_content_subscribers, _$.writeScope(_scope1_id, {
          "#childScope/0": _$.writeExistingScope(_childScope),
          setHtml
        }, "__tests__/template.marko", "3:4"));
      }), "__tests__/template.marko_1_renderer", _scope0_id)
    })
  });
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml");
  _$.writeScope(_scope0_id, {
    _hoisted_setHtml,
    "1?": _what_content_subscribers
  }, "__tests__/template.marko", 0, {
    _hoisted_setHtml: "4:12"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);