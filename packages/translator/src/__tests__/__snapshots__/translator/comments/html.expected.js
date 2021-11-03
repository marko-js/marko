import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("src/__tests__/fixtures/comments/template.marko", input => {
  _write("<div><!--abc--><!--[if lt IE 9]><script src=\"...\"></script><![endif]--><!--[if lt IE 9]><script src=\"...\"></script><![endif]--></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);