// size: 764 (min) 354 (brotli)
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
  _count$if_content = _$.registerSubscriber(
    "a1",
    _$.dynamicClosure(
      4,
      (_scope, count) => {
        _$.data(_scope[1], count), _count$if_content_effect(_scope);
      },
      (_scope) => _scope._._,
    ),
  ),
  _if_content2 = _$.register(
    "a2",
    _$.createRenderer("<button id=count> </button>", " D ", void 0, () => [
      _count$if_content,
    ]),
  ),
  _if$if_content = _$.conditional(1, 0),
  _inner$if_content_effect = _$.effect("a3", (_scope, { _: { 3: inner } }) =>
    _$.on(_scope[0], "click", function () {
      _inner(_scope._, !inner);
    }),
  ),
  _inner$if_content = _$.closure(
    3,
    (_scope, inner) => {
      _inner$if_content_effect(_scope),
        _if$if_content(_scope, inner ? _if_content2 : null);
    },
    void 0,
    () => _if$if_content,
  ),
  _if_content = _$.register(
    "a4",
    _$.createRenderer(
      "<button id=inner></button><!><!>",
      " b%D",
      void 0,
      () => [_inner$if_content],
    ),
  ),
  _if = _$.conditional(1, 0),
  _count = _$.state(4, 0, () => _$.dynamicSubscribers(4)),
  _inner = _$.state(3, 0, () => _$.inConditionalScope(_inner$if_content, 1)),
  _outer_effect = _$.effect("a5", (_scope, { 2: outer }) =>
    _$.on(_scope[0], "click", function () {
      _outer(_scope, !outer);
    }),
  ),
  _outer = _$.state(
    2,
    (_scope, outer) => {
      _outer_effect(_scope), _if(_scope, outer ? _if_content : null);
    },
    () => _if,
  );
init();
