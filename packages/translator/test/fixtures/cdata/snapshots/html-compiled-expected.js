import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/cdata/template.marko", input => {
  _write("<div>Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);