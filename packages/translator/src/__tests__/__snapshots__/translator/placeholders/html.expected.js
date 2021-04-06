import { escapeXML as _escapeXML, toString as _toString, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("+2Y4wOVt", input => {
  _write(`<div><div>a</div>${_escapeXML(input.x)}Hello Text &lt;a/>${_toString(input.x)}Hello HTML <a/><script>
    Hello &lt;b> &lt;/script>
  </script></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);