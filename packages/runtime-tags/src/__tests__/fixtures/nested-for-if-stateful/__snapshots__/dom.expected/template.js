export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$else_content = /* @__PURE__ */_$.conditionalClosure("count", "#text/0", 1, (_scope, count) => _$.data(_scope["#text/1"], count));
const _setup$else_content_effect = _$.effect("__tests__/template.marko_3", _scope => _$.on(_scope["#button/0"], "click", function () {
  _editing$for_content(_scope._, true);
}));
const _setup$else_content = _scope => {
  _count$else_content._(_scope);
  _setup$else_content_effect(_scope);
};
const _else_content = /* @__PURE__ */_$.createRenderer("<button>Increment <!></button>", /* get, next(1), over(1), replace */" Db%", _setup$else_content);
const _expr_counts_count_i$if_content_effect = _$.effect("__tests__/template.marko_2_counts_count_i", (_scope, {
  _: {
    _: {
      counts
    },
    count,
    i
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _counts(_scope._._, [...counts.slice(0, i), count + 1, ...counts.slice(i + 1)]);
  _editing$for_content(_scope._, false);
}));
const _expr_counts_count_i$if_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      _: {
        counts
      },
      count,
      i
    }
  } = _scope;
  _expr_counts_count_i$if_content_effect(_scope);
}, 2);
const _i$if_content = /* @__PURE__ */_$.conditionalClosure("i", "#text/0", 0, (_scope, i) => _expr_counts_count_i$if_content(_scope));
const _count$if_content = /* @__PURE__ */_$.conditionalClosure("count", "#text/0", 0, (_scope, count) => {
  _$.data(_scope["#text/1"], count + 1);
  _expr_counts_count_i$if_content(_scope);
});
const _counts$if_content = _$.registerDynamicClosure("__tests__/template.marko_2_counts/subscriber", "counts", (_scope, counts) => _expr_counts_count_i$if_content(_scope), _scope => _scope._._);
const _setup$if_content = _scope => {
  _counts$if_content._(_scope);
  _count$if_content._(_scope);
  _i$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<button>Confirm <!></button>", /* get, next(1), over(1), replace */" Db%", _setup$if_content);
const _if$for_content = /* @__PURE__ */_$.conditional("#text/0", _if_content, _else_content);
const _editing$for_content = /* @__PURE__ */_$.state("editing/4", (_scope, editing) => _if$for_content(_scope, editing ? 0 : 1));
const _i$for_content = /* @__PURE__ */_$.value("i", (_scope, i) => _i$if_content(_scope));
const _count$for_content = /* @__PURE__ */_$.value("count", (_scope, count) => {
  _count$if_content(_scope);
  _count$else_content(_scope);
});
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _count$for_content(_scope, _params_2[0]);
  _i$for_content(_scope, _params_2[1]);
});
const _setup$for_content = _scope => {
  _editing$for_content(_scope, false);
};
const _for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$for_content, () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
const _counts = /* @__PURE__ */_$.state("counts/1", (_scope, counts) => {
  _for(_scope, [counts]);
  _counts$if_content(_scope);
});
export function _setup_(_scope) {
  _counts(_scope, [0, 0, 0]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);