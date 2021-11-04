import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;";
export const walks = "b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/entities/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);