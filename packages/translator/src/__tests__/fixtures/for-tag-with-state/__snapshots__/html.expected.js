import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const arrA = [1, 2, 3];

  _write(`${_markHydrateNode(_scope, 0)}`);

  let _i = 0;

  for (const val of arrA) {
    let i = _i++;

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(i)}: ${_markHydrateNode(_scope, 1)}${_escapeXML(val)}</div>`);
  }

  const arrB = [1, 2, 3];

  _write(`${_markHydrateNode(_scope, 4)}`);

  let _i2 = 0;

  for (const val of arrB) {
    let i = _i2++;

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(i)}: ${_markHydrateNode(_scope, 1)}${_escapeXML(val)}</div>`);
  }
};

export default _renderer;
export const render = _createRenderer(_renderer);