// size: 315 (min) 205 (brotli)
const _setup = () => {},
  _id = _$.value(3, (_scope, id) => _$.data(_scope[0], id)),
  _input = _$.value(2, (_scope, input) => _id(_scope, input.id));
var child = _$.createTemplate(
  "a",
  "<div>Id is <!></div>",
  "Db%l",
  _setup,
  _input,
);
const _dynamicTag = _$.dynamicTag(1),
  _tagName_effect = _$.effect("b0", (_scope, { 2: tagName }) =>
    _$.on(_scope[0], "click", function () {
      _tagName(_scope, tagName === child ? "div" : child);
    }),
  ),
  _tagName = _$.state(2, (_scope, tagName) => {
    _dynamicTag(_scope, tagName, () => ({ id: "dynamic" })),
      _tagName_effect(_scope);
  });
init();
