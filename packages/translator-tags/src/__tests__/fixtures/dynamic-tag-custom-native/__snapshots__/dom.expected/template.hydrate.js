// size: 429 (min) 280 (brotli)
const _setup_ = () => {},
  _id_ = _$.value(3, (_scope, id) => _$.data(_scope[0], id)),
  _input_ = _$.value(2, (_scope, input) => _id_(_scope, input.id)),
  _params__ = _$.value(1, (_scope, _params_) => _input_(_scope, _params_[0]));
var child = _$.createTemplate(
  "c",
  "<div>Id is <!></div>",
  "Db%l",
  _setup_,
  void 0,
  () => _params__,
);
const _tagName_input = _$.dynamicTagAttrs(1),
  _dynamicTagName = _$.conditional(
    1,
    (_scope) => _tagName_input(_scope, () => ({ id: "dynamic" })),
    () => _tagName_input,
  ),
  _tagName_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: tagName } = _scope;
        return function () {
          _tagName(_scope, tagName === child ? "div" : child);
        };
      })(_scope),
    ),
  ),
  _tagName = _$.state(
    2,
    (_scope, tagName) => {
      _tagName_effect(_scope), _dynamicTagName(_scope, tagName);
    },
    () => _dynamicTagName,
  );
init();
