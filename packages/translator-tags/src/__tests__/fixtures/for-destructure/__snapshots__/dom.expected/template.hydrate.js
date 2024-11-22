// size: 542 (min) 263 (brotli)
const _description$forBody = _$.value(5, (_scope, description) =>
    _$.data(_scope[1], description),
  ),
  _name$forBody = _$.value(4, (_scope, name) => _$.data(_scope[0], name)),
  _pattern_$forBody = _$.value(3, (_scope, _pattern_) => {
    _name$forBody(_scope, _pattern_.name),
      _description$forBody(_scope, _pattern_.description);
  }),
  _params_2$forBody = _$.value(2, (_scope, _params_2) =>
    _pattern_$forBody(_scope, _params_2[0]),
  ),
  _forBody = _$.register(
    "b",
    _$.createRenderer(
      "<div><!>: <!></div>",
      "D%c%",
      void 0,
      void 0,
      () => _params_2$forBody,
    ),
  ),
  _for = _$.loopOf(0, _forBody),
  _items_effect = _$.effect("c", (_scope) => {
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 3: items } = _scope;
        return function () {
          _items(_scope, [
            ...items,
            { name: "JavaScript", description: "Java, but scriptier" },
          ]);
        };
      })(_scope),
    ),
      _$.on(
        _scope[2],
        "click",
        ((_scope) => {
          const { 3: items } = _scope;
          return function () {
            _items(_scope, items.slice(0, -1));
          };
        })(_scope),
      );
  }),
  _items = _$.state(3, (_scope, items) => {
    _items_effect(_scope), _for(_scope, [items]);
  });
init();
