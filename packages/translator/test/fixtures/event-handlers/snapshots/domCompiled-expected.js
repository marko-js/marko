import { hydrate as _child, template as _childTemplate, walks as _childWalks } from "./components/child/index.marko";
import { walk as _walk, attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = _childTemplate + "<div class=hi></div>";
export const walks = `${_childWalks}!]`;
export const hydrate = _register("packages/translator/test/fixtures/event-handlers/template.marko", input => {
  _child({
    class: "hi",
    onclick: () => {
      console.log("hello world");
    }
  });

  _walk();

  _attr("onclick", () => {
    console.log("hello world");
  });
});
export default _createRenderFn(template, walks, [], hydrate);