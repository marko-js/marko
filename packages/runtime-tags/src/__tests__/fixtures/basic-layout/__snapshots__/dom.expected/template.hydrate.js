// size: 171 (min) 132 (brotli)
const _name$layout_content = _$.registerSubscriber(
    "b0",
    _$.dynamicClosure((_scope, name) => _$.data(_scope[0], name)),
  ),
  _setup$layout_content = (_scope) => {
    _name$layout_content._(_scope, _scope._[3]);
  };
_$.register(
  "b1",
  _$.createRendererWithOwner(
    "<h1>Hello <!></h1>",
    "Db%",
    _setup$layout_content,
  ),
);
