export const _template_ = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
import { on as _on, data as _data, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    _count3
  } = _scope;
  return function () {
    _queueSource(_scope, _count4, _count3 + 1);
  };
};
const _count4_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count3", _scope => _on(_scope["#button/6"], "click", _onClick(_scope)));
const _count4 = /* @__PURE__ */_value("_count3", (_scope, _count3) => {
  _data(_scope["#text/7"], _count3);
  _queueEffect(_scope, _count4_effect);
});
const _onClick2 = _scope => {
  const {
    _count2
  } = _scope;
  return function () {
    _queueSource(_scope, _count3, _count2 + 1);
  };
};
const _count3_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count2", _scope => _on(_scope["#button/4"], "click", _onClick2(_scope)));
const _count3 = /* @__PURE__ */_value("_count2", (_scope, _count2) => {
  _data(_scope["#text/5"], _count2);
  _queueEffect(_scope, _count3_effect);
});
const _onClick3 = _scope => {
  const {
    _count
  } = _scope;
  return function () {
    _queueSource(_scope, _count2, _count + 1);
  };
};
const _count2_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count", _scope => _on(_scope["#button/2"], "click", _onClick3(_scope)));
const _count2 = /* @__PURE__ */_value("_count", (_scope, _count) => {
  _data(_scope["#text/3"], _count);
  _queueEffect(_scope, _count2_effect);
});
const _onClick4 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 1);
  };
};
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick4(_scope)));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
});
export function _setup_(_scope) {
  _count(_scope, 0);
  _count2(_scope, 0);
  _count3(_scope, 0);
  _count4(_scope, 0);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko");