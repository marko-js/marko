import { classAttr as _classAttr, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const {
    c,
    d
  } = input;
  _write(`<div${_classAttr(["a", {
    b: c,
    d
  }])}></div>${_markResumeNode(_scope0_id, "#div/0")}<div class="a b"></div><div class="a b c"></div>`);
  _customTag._({
    class: ["a", {
      b: c,
      d
    }]
  });
  _customTag._({
    class: ["a", false, "b"]
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
  }, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _writeScope(_scope1_id, {
      "c": c,
      "d": d
    });
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/3")}`);
  _writeScope(_scope0_id, {
    "c": c,
    "d": d,
    "#text/3!": _dynamicScope,
    "#text/3(": input.test
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/attr-class/template.marko");