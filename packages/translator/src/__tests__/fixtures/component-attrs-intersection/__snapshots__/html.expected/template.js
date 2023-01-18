import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _displayIntersection from "./components/display-intersection.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const count = 0;
  _displayIntersection({
    value: count,
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _write(`<button></button>${_markHydrateNode(_scope, 0)}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count");
  _writeHydrateScope(_scope, {
    1: count
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);