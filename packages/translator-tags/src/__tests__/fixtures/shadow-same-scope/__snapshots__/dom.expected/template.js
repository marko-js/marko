export const _template_ = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
import { on as _on, data as _data, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    _count3
  } = _scope;
  return function () {
    _count4(_scope, _count3 + 1);
  };
};
const _count4_effect = _effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count3", _scope => _on(_scope["#button/6"], "click", _onClick(_scope)));
const _count4 = /* @__PURE__ */_state("_count3", (_scope, _count3) => {
  _data(_scope["#text/7"], _count3);
  _count4_effect(_scope);
});
const _onClick2 = _scope => {
  const {
    _count2
  } = _scope;
  return function () {
    _count3(_scope, _count2 + 1);
  };
};
const _count3_effect = _effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count2", _scope => _on(_scope["#button/4"], "click", _onClick2(_scope)));
const _count3 = /* @__PURE__ */_state("_count2", (_scope, _count2) => {
  _data(_scope["#text/5"], _count2);
  _count3_effect(_scope);
});
const _onClick3 = _scope => {
  const {
    _count
  } = _scope;
  return function () {
    _count2(_scope, _count + 1);
  };
};
const _count2_effect = _effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count", _scope => _on(_scope["#button/2"], "click", _onClick3(_scope)));
const _count2 = /* @__PURE__ */_state("_count", (_scope, _count) => {
  _data(_scope["#text/3"], _count);
  _count2_effect(_scope);
});
const _onClick4 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick4(_scope)));
const _count = /* @__PURE__ */_state("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
  _count2(_scope, 0);
  _count3(_scope, 0);
  _count4(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko");