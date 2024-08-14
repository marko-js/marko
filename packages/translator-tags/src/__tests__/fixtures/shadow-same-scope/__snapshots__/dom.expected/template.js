import { on as _on, data as _data, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count4
  } = _scope;
  return function () {
    _queueSource(_scope, _count4, count4 + 1);
  };
};
const _count4_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count4", _scope => _on(_scope["#button/6"], "click", _onClick(_scope)));
const _count4 = /* @__PURE__ */_value("count4", (_scope, count4) => {
  _data(_scope["#text/7"], count4);
  _queueEffect(_scope, _count4_effect);
});
const _onClick2 = _scope => {
  const {
    count3
  } = _scope;
  return function () {
    _queueSource(_scope, _count3, count3 + 1);
  };
};
const _count3_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count3", _scope => _on(_scope["#button/4"], "click", _onClick2(_scope)));
const _count3 = /* @__PURE__ */_value("count3", (_scope, count3) => {
  _data(_scope["#text/5"], count3);
  _queueEffect(_scope, _count3_effect);
});
const _onClick3 = _scope => {
  const {
    count2
  } = _scope;
  return function () {
    _queueSource(_scope, _count2, count2 + 1);
  };
};
const _count2_effect = _register("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count2", _scope => _on(_scope["#button/2"], "click", _onClick3(_scope)));
const _count2 = /* @__PURE__ */_value("count2", (_scope, count2) => {
  _data(_scope["#text/3"], count2);
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
const _setup = _scope => {
  _count(_scope, 0);
  _count2(_scope, 0);
  _count3(_scope, 0);
  _count4(_scope, 0);
};
export const _template_ = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko");