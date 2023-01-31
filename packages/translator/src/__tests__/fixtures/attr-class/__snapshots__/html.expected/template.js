import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const {
    c,
    d
  } = input;
  _write(`<div${_classAttr(["a", {
    b: c,
    d
  }])}></div>${_markHydrateNode(_scope0_, "#div/0")}<div class="a b"></div><div class="a b c"></div>`);
  _customTag({
    class: ["a", {
      b: c,
      d
    }],
    renderBody() {
      const _scope2_ = _nextScopeId();
    }
  });
  _customTag({
    class: ["a", false, "b"],
    renderBody() {
      const _scope3_ = _nextScopeId();
    }
  });
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
  _writeHydrateScope(_scope0_, {
    "#text/3": dynamicTagName,
    "c": c,
    "d": d
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);