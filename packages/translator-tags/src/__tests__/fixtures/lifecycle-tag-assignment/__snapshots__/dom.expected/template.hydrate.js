// size: 344 (min) 173 (brotli)
const _prev = _$.state(4, (_scope, prev) => _$.data(_scope[1], prev)),
  _onMount = (_scope) => {
    const { 3: x } = _scope;
    return function () {
      this.cur = x;
    };
  },
  _onUpdate = (_scope) => {
    const { 3: x } = _scope;
    return function () {
      _prev(_scope, this.cur), (this.cur = x);
    };
  },
  _x_effect = _$.effect("b", (_scope) => {
    _$.lifecycle(_scope, 4, {
      onMount: _onMount(_scope),
      onUpdate: _onUpdate(_scope),
    }),
      _$.on(
        _scope[2],
        "click",
        ((_scope) => {
          const { 3: x } = _scope;
          return function () {
            _x(_scope, x + 1);
          };
        })(_scope),
      );
  }),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[0], x), _x_effect(_scope);
  });
init();
