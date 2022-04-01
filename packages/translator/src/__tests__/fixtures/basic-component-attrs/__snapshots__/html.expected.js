import { nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _myButton from "./components/my-button.marko";

const _renderer = input => {
  const clickCount = 0;

  _myButton({
    text: clickCount,
    onclick: function () {
      clickCount++;
    },

    renderBody() {
      const _scope = _nextScopeId();
    }

  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);