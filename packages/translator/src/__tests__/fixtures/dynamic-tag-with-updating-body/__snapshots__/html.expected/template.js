import { write as _write, nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _counter from "./components/counter.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const tagName = "div";
  _write(`<${tagName}>`);
  _counter({
    renderBody() {
      const _scope1_ = _nextScopeId();
    }
  });
  _write(`</${tagName}><button id=changeTag></button>${_markHydrateNode(_scope0_, "#button/1")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName");
  _writeHydrateScope(_scope0_, {
    "tagName": tagName
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);