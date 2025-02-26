// size: 275 (min) 180 (brotli)
const _tagName_content = _$.registerContent("a0", "body content"),
  _expr_tagName_className = _$.intersection(
    2,
    (_scope) => {
      const { 2: tagName, 3: className } = _scope;
      _dynamicTag(_scope, tagName, () => ({ class: className }));
    },
    () => _dynamicTag,
  ),
  _dynamicTag = _$.dynamicTag(0, _tagName_content),
  _tagName_effect = _$.effect("a1", (_scope, { 2: tagName }) =>
    _$.on(_scope[1], "click", function () {
      _tagName(_scope, "span" === tagName ? "div" : "span");
    }),
  ),
  _tagName = _$.state(
    2,
    (_scope, tagName) => _tagName_effect(_scope),
    () => _expr_tagName_className,
  );
init();
