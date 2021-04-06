import { hydrate as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { attr as _attr, walk as _walk, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = `${_child_template}<div class=hi></div>`;
export const walks = `${_child_walks} b`;
export const hydrate = _register("zgeYPhda", input => {
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