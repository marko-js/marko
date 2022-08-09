import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const arrA = [1, 2, 3];

  _write(`${_markHydrateNode(_scope, 0)}<div>`);

  for (const val of arrA) {
    const _scope = _nextScopeId();

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(val)}</div>`);

    _maybeFlush();
  }

  _write(`</div><div>${_markHydrateNode(_scope, 7)}`);

  for (const val of arrA) {
    const _scope = _nextScopeId();

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(val)}</div>`);

    _maybeFlush();
  }

  _write("<div></div></div>");
};

export default _renderer;
export const render = _createRenderer(_renderer);