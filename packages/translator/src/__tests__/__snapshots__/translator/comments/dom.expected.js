import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div><!--abc--><!--[if lt IE 9]><script src=\"...\"></script><![endif]--></div>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/comments/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);