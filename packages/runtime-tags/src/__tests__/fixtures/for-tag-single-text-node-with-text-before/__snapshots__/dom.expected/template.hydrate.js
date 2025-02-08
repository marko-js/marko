// size: 223 (min) 156 (brotli)
const _for_content = _$.createRenderer("Child", ""),
  _for = _$.loopOf(1, _for_content),
  _children_length = _$.value(3, (_scope, children_length) =>
    _$.attr(_scope[0], "data-children", children_length),
  ),
  _children_effect = _$.effect("a0", (_scope, { 2: children }) => {
    1 === children.length && _children(_scope, [...children, 2]);
  }),
  _children = _$.state(2, (_scope, children) => {
    _children_effect(_scope),
      _children_length(_scope, children?.length),
      _for(_scope, [children]);
  });
init();
