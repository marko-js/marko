// size: 673 (min) 302 (brotli)
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
  _count$if_content = _$.dynamicClosureRead(
    4,
    (_scope, count) => {
      _$.data(_scope[1], count), _count$if_content_effect(_scope);
    },
    (_scope) => _scope._._,
  ),
  _if_content2 = _$.createRenderer(
    "<button id=count> </button>",
    " D ",
    0,
    0,
    (_scope) => _count$if_content(_scope),
  ),
  _if$if_content = _$.conditional(1, _if_content2),
  _inner$if_content_effect = _$.effect("a1", (_scope, { _: { 3: inner } }) =>
    _$.on(_scope[0], "click", function () {
      _inner(_scope._, !inner);
    }),
  ),
  _inner$if_content = _$.conditionalClosure(3, 1, 0, (_scope, inner) => {
    _if$if_content(_scope, inner ? 0 : 1), _inner$if_content_effect(_scope);
  }),
  _if_content = _$.createRenderer(
    "<button id=inner></button><!><!>",
    " b%D",
    0,
    0,
    (_scope) => _inner$if_content._(_scope),
  ),
  _if = _$.conditional(1, _if_content),
  _count_closure = _$.dynamicClosure(_count$if_content),
  _count = _$.state(4, (_scope, count) => _count_closure(_scope)),
  _inner = _$.state(3, (_scope, inner) => _inner$if_content(_scope)),
  _outer_effect = _$.effect("a2", (_scope, { 2: outer }) =>
    _$.on(_scope[0], "click", function () {
      _outer(_scope, !outer);
    }),
  ),
  _outer = _$.state(2, (_scope, outer) => {
    _if(_scope, outer ? 0 : 1), _outer_effect(_scope);
  });
init();
