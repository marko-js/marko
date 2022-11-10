import { markHydrateNode as _markHydrateNode, classAttr as _classAttr, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = input => {
  const _scope = _nextScopeId();
  const {
    c,
    d
  } = input;
  _write(`${_markHydrateNode(_scope, 0)}<div${_classAttr(["a", {
    b: c,
    d
  }])}></div><div class="a b"></div><div class="a b c"></div>`);
  _customTag({
    class: ["a", {
      b: c,
      d
    }],
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _customTag({
    class: ["a", false, "b"],
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _write(`${_markHydrateNode(_scope, 1)}`);
  _dynamicTag(input.test, {
    class: ["a", {
      b: c,
      d
    }],
    test: {
      class: ["a", {
        b: c,
        d
      }],
      renderBody() {
        _write("Hello");
      }
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);