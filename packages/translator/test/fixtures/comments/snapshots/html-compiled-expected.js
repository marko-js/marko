import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/comments/template.marko", input => {
  _write("<div><!--abc--><!--[if lt IE 9]><script src=\"...\"></script><![endif]--><!--[if lt IE 9]><script src=\"...\"></script><![endif]--></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);