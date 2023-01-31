import child from "./components/child.marko";
import { markHydrateNode as _markHydrateNode, write as _write, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const tagName = child;
  _write(`<button></button>${_markHydrateNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _dynamicTag(tagName, {
    id: "dynamic"
  });
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/1")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName");
  _writeHydrateScope(_scope0_id, {
    "tagName": tagName,
    "#text/1!": _dynamicScope,
    "#text/1(": tagName
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);