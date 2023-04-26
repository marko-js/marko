import { classAttr as _classAttr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const {
    c,
    d
  } = input;
  _write(`<div${_classAttr(["a", {
    b: c,
    d
  }])}></div>${_markResumeNode(_scope0_id, "#div/0")}<div class="a b"></div><div class="a b c"></div>`);
  _customTag({
    class: ["a", {
      b: c,
      d
    }],
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  });
  _customTag({
    class: ["a", false, "b"],
    renderBody() {
      const _scope3_id = _nextScopeId();
    }
  });
  const _dynamicScope = _dynamicTag(input.test, {
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
  _write(`${_markResumeControlEnd(_scope0_id, "#text/3")}`);
  _writeScope(_scope0_id, {
    "c": c,
    "d": d,
    "#text/3!": _dynamicScope,
    "#text/3(": input.test
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/attr-class/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);