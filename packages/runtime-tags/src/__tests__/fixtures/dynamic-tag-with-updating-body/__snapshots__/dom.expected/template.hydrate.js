// size: 403 (min) 241 (brotli)
const _count_effect = _$.effect("a0", (_scope, { 2: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(2, (_scope, count) => {
    _$.data(_scope[1], count), _count_effect(_scope);
  });
const _setup$tagName_content = (_scope) => {
    !(function (_scope) {
      _count(_scope, 0);
    })(_scope[0]);
  },
  _tagName_content = _$.register(
    "b0",
    _$.createRendererWithOwner(
      "<button id=count> </button>",
      "/ D l&",
      _setup$tagName_content,
    ),
  ),
  _dynamicTag = _$.dynamicTag(0, _tagName_content),
  _tagName_effect = _$.effect("b1", (_scope, { 2: tagName }) =>
    _$.on(_scope[1], "click", function () {
      _tagName(_scope, "span" === tagName ? "div" : "span");
    }),
  ),
  _tagName = _$.state(
    2,
    (_scope, tagName) => {
      _tagName_effect(_scope), _dynamicTag(_scope, tagName);
    },
    () => _dynamicTag,
  );
init();
