import { markHydrateNode as _markHydrateNode, write as _write, attr as _attr, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const selected = 0;

  _write(`${_markHydrateNode(_scope, 0)}`);

  for (const num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    const _scope = _nextScopeId();

    _write(`${_markHydrateNode(_scope, 0)}<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_markHydrateNode(_scope, 1)}${_escapeXML(num)}</button>`);

    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_0");

    _writeHydrateScope(_scope, [,, num]);
  }
};

export default _renderer;
export const render = _createRenderer(_renderer);