// size: 680 (min) 328 (brotli)
const _count$if_content_effect = _$.effect(
    "a0",
    (
      _scope,
      {
        _: {
          _: { 4: count },
        },
      },
    ) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._._, count + 1);
      }),
  ),
  _count$if_content = _$.registerDynamicClosure(
    "a1",
    4,
    (_scope, count) => {
      _$.data(_scope[1], count), _count$if_content_effect(_scope);
    },
    0,
    (_scope) => _scope._._,
  ),
  _setup$if_content2 = (_scope) => {
    _count$if_content._(_scope);
  },
  _if_content2 = _$.createRenderer(
    "<button id=count> </button>",
    " D ",
    _setup$if_content2,
  ),
  _if$if_content = _$.conditional(1, _if_content2),
  _inner$if_content_effect = _$.effect("a2", (_scope, { _: { 3: inner } }) =>
    _$.on(_scope[0], "click", function () {
      _inner(_scope._, !inner);
    }),
  ),
  _inner$if_content = _$.conditionalClosure(
    3,
    1,
    0,
    (_scope, inner) => {
      _inner$if_content_effect(_scope), _if$if_content(_scope, inner ? 0 : 1);
    },
    () => _if$if_content,
  ),
  _setup$if_content = (_scope) => {
    _inner$if_content._(_scope);
  },
  _if_content = _$.createRenderer(
    "<button id=inner></button><!><!>",
    " b%D",
    _setup$if_content,
  ),
  _if = _$.conditional(1, _if_content),
  _count = _$.state(4, (_scope, count) => _count$if_content(_scope)),
  _inner = _$.state(3, (_scope, inner) => _inner$if_content(_scope)),
  _outer_effect = _$.effect("a3", (_scope, { 2: outer }) =>
    _$.on(_scope[0], "click", function () {
      _outer(_scope, !outer);
    }),
  ),
  _outer = _$.state(
    2,
    (_scope, outer) => {
      _outer_effect(_scope), _if(_scope, outer ? 0 : 1);
    },
    () => _if,
  );
init();
