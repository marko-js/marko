import { escapeXML as _escapeXML, toString as _toString, write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  _write(`<div>${_escapeXML(input.x)}Hello world &lt;a/>${_toString(input.x)}Hello world <a/><script>
    Hello &lt;b> &lt;/script>
  </script></div>`);
});

export default _renderer;
export const render = _createRenderFn(_renderer);