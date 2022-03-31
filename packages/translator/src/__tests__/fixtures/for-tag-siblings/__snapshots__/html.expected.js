import { markScopeOffset as _markScopeOffset, write as _write, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/for-tag-siblings/template.marko", input => {
  const arrA = [1, 2, 3];

  _write(`${_markScopeOffset(0)}<div>`);

  for (const val of arrA) {
    _write(`<div>${_markScopeOffset(0)}${_escapeXML(val)}</div>`);
  }

  _write(`</div><div>${_markScopeOffset(4)}`);

  for (const val of arrA) {
    _write(`<div>${_markScopeOffset(0)}${_escapeXML(val)}</div>`);
  }

  _write("<div></div></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);