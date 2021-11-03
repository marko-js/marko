import { hydrate as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `${_child_template}<div class=hi></div>`;
export const walks = `${_child_walks} b`;
export const hydrate = _register("src/__tests__/fixtures/event-handlers/template.marko", input => {
  _child({
    class: "hi",
    onclick: () => {
      console.log("hello world");
    }
  });

  _attr("onclick", () => {
    console.log("hello world");
  });
});
export default _createRenderFn(template, walks, [], hydrate);