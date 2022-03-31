import _myButton from "./components/my-button.marko";
import { register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-component-attrs/template.marko", input => {
  const clickCount = 0;

  _myButton({
    text: clickCount,
    onclick: function () {
      clickCount++;
    }
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);