// size: 956 (min) 428 (brotli)
const _count$else_content = _$.conditionalClosure(0, 1, (_scope, count) =>
    _$.data(_scope[1], count),
  ),
  _setup$else_content_effect = _$.effect("a0", (_scope) =>
    _$.on(_scope[0], "click", function () {
      _editing$for_content(_scope._, !0);
    }),
  ),
  _setup$else_content = (_scope) => {
    _count$else_content._(_scope, _scope._[2]),
      _setup$else_content_effect(_scope);
  },
  _else_content = _$.createRenderer(
    "<button>Increment <!></button>",
    " Db%",
    _setup$else_content,
  ),
  _expr_counts_count_i$if_content_effect = _$.effect(
    "a1",
    (
      _scope,
      {
        _: {
          _: { 1: counts },
          2: count,
          3: i,
        },
      },
    ) =>
      _$.on(_scope[0], "click", function () {
        _counts(_scope._._, [
          ...counts.slice(0, i),
          count + 1,
          ...counts.slice(i + 1),
        ]),
          _editing$for_content(_scope._, !1);
      }),
  ),
  _expr_counts_count_i$if_content = _$.intersection(3, (_scope) => {
    _expr_counts_count_i$if_content_effect(_scope);
  }),
  _i$if_content = _$.conditionalClosure(
    0,
    0,
    0,
    () => _expr_counts_count_i$if_content,
  ),
  _count$if_content = _$.conditionalClosure(
    0,
    0,
    (_scope, count) => _$.data(_scope[1], count + 1),
    () => _expr_counts_count_i$if_content,
  ),
  _counts$if_content = _$.registerSubscriber(
    "a2",
    _$.dynamicClosure(
      0,
      (_scope) => _scope._._,
      () => _expr_counts_count_i$if_content,
    ),
  ),
  _setup$if_content = (_scope) => {
    _counts$if_content._(_scope, _scope._._[1]),
      _count$if_content._(_scope, _scope._[2]),
      _i$if_content._(_scope, _scope._[3]);
  },
  _if_content = _$.createRenderer(
    "<button>Confirm <!></button>",
    " Db%",
    _setup$if_content,
  ),
  _if$for_content = _$.conditional(0, _if_content, _else_content),
  _editing$for_content = _$.state(
    4,
    (_scope, editing) => _if$for_content(_scope, editing ? 0 : 1),
    () => _if$for_content,
  ),
  _i$for_content = _$.value(3, (_scope, i) => _i$if_content(_scope, i)),
  _count$for_content = _$.value(2, (_scope, count) => {
    _count$if_content(_scope, count), _count$else_content(_scope, count);
  }),
  _params_2$for_content = _$.value(1, (_scope, _params_2) => {
    _count$for_content(_scope, _params_2[0]),
      _i$for_content(_scope, _params_2[1]);
  }),
  _setup$for_content = (_scope) => {
    _editing$for_content(_scope, !1);
  },
  _for_content = _$.createRenderer(
    "<!><!><!>",
    "D%D",
    _setup$for_content,
    () => _params_2$for_content,
  ),
  _for = _$.loopOf(0, _for_content),
  _counts = _$.state(1, (_scope, counts) => {
    _for(_scope, [counts]), _counts$if_content(_scope, counts);
  });
init();
