import { markHydrateNode as _markHydrateNode, write as _write, attr as _attr, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const selected = 0;

  _write(`${_markHydrateNode(_scope, 0)}`);

  for (const num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    _write(`${_markHydrateNode(_scope, 0)}<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_markHydrateNode(_scope, 1)}${_escapeXML(num)}</button>`);
  }
};

export default _renderer;
export const render = _createRenderer(_renderer);