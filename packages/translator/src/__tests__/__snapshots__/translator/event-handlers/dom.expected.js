import { hydrate as _child, template as _childTemplate, walks as _childWalks } from "./components/child/index.marko";
import { attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = _childTemplate + "<div class=hi></div>";
export const walks = `${_childWalks}!]`;
export const hydrate = _register("zgeYPhda", input => {
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