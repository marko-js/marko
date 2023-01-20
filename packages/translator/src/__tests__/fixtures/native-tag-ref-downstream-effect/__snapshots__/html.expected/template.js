import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markHydrateNode(_scope, "#div/0")}`);
  if (true) {
    const _scope = _nextScopeId();
    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1");
  }
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);