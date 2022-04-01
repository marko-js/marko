import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/for-tag-with-state/template.marko", input => {
  const arrA = [1, 2, 3];

  _write(`${_markHydrateNode(0)}`);

  let _i = 0;

  for (const val of arrA) {
    let i = _i++;

    _write(`<div>${_markHydrateNode(0)}${_escapeXML(i)}: ${_markHydrateNode(1)}${_escapeXML(val)}</div>`);
  }

  const arrB = [1, 2, 3];

  _write(`${_markHydrateNode(4)}`);

  let _i2 = 0;

  for (const val of arrB) {
    let i = _i2++;

    _write(`<div>${_markHydrateNode(0)}${_escapeXML(i)}: ${_markHydrateNode(1)}${_escapeXML(val)}</div>`);
  }
});

export default _renderer;
export const render = _createRenderer(_renderer);