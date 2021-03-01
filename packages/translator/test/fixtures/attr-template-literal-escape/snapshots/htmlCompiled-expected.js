import { hydrateMarker as _hydrateMarker, attr as _attr, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/attr-template-literal-escape/template.marko", input => {
  _write(`${_hydrateMarker()}<div${_attr("foo", `Hello ${input.name}`)}></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);