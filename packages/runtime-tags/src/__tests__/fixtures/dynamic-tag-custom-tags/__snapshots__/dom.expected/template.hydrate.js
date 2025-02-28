// size: 594 (min) 264 (brotli)
const _setup_$1 = () => {},
  _value_$1 = _$.value(3, (_scope, value) => _$.data(_scope[0], value)),
  _input_$1 = _$.value(2, (_scope, input) => _value_$1(_scope, input.value)),
  _params__$1 = _$.value(1, (_scope, _params_) =>
    _input_$1(_scope, _params_[0]),
  );
var child1 = _$.createTemplate(
  "a",
  "<div>Child 1 has <!></div>",
  "Db%l",
  _setup_$1,
  () => _params__$1,
);
const _setup_ = () => {},
  _value_ = _$.value(3, (_scope, value) => _$.data(_scope[0], value)),
  _input_ = _$.value(2, (_scope, input) => _value_(_scope, input.value)),
  _params__ = _$.value(1, (_scope, _params_) => _input_(_scope, _params_[0]));
var child2 = _$.createTemplate(
  "b",
  "<div>Child 2 has <!></div>",
  "Db%l",
  _setup_,
  () => _params__,
);
const _expr_tagName_val = _$.intersection(4, (_scope) => {
    const { 2: tagName, 3: val } = _scope;
    _dynamicTag(_scope, tagName, () => ({ value: val }));
  }),
  _dynamicTag = _$.dynamicTag(),
  _tagName_effect = _$.effect("c0", (_scope, { 2: tagName }) =>
    _$.on(_scope[1], "click", function () {
      _tagName(_scope, tagName === child1 ? child2 : child1);
    }),
  ),
  _tagName = _$.state(2, (_scope, tagName) => {
    _expr_tagName_val(_scope), _tagName_effect(_scope);
  });
init();
