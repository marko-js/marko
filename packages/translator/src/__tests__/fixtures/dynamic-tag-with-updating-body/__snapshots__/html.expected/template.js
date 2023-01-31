import { nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _counter from "./components/counter.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const tagName = "div";
  const _dynamicScope = _dynamicTag(tagName, {}, () => _counter({
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  }));
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}<button id=changeTag></button>${_markHydrateNode(_scope0_id, "#button/1")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName");
  _writeHydrateScope(_scope0_id, {
    "tagName": tagName,
    "#text/0!": _dynamicScope,
    "#text/0(": tagName
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);