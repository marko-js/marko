import { markHydrateNode as _markHydrateNode, write as _write, on as _on, attr as _attr, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko", input => {
  const selected = 0;

  _write(`${_markHydrateNode(0)}`);

  for (const num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    _write(`${_markHydrateNode(0)}<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_markHydrateNode(1)}${_escapeXML(num)}</button>`);
  }
});

export default _renderer;
export const render = _createRenderer(_renderer);