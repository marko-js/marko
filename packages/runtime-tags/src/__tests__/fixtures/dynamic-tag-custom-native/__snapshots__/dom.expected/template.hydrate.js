// size: 361 (min) 218 (brotli)
const _setup_ = () => {},
  _id_ = _$.value(3, (_scope, id) => _$.data(_scope[0], id)),
  _input_ = _$.value(2, (_scope, input) => _id_(_scope, input.id)),
  _params__ = _$.value(1, (_scope, _params_) => _input_(_scope, _params_[0]));
var child = _$.createTemplate(
  "a",
  "<div>Id is <!></div>",
  "Db%l",
  _setup_,
  () => _params__,
);
const _dynamicTag = _$.dynamicTag(1),
  _tagName_effect = _$.effect("b0", (_scope, { 2: tagName }) =>
    _$.on(_scope[0], "click", function () {
      _tagName(_scope, tagName === child ? "div" : child);
    }),
  ),
  _tagName = _$.state(
    2,
    (_scope, tagName) => {
      _tagName_effect(_scope),
        _dynamicTag(_scope, tagName, () => ({ id: "dynamic" }));
    },
    () => _dynamicTag,
  );
init();
