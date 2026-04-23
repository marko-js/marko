// size: 465 (min) 272 (brotli)
const _marko_template = t(`a`);
r(`a`, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.state = { count: 0 };
  },
  increment() {
    this.state.count++;
  },
};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    (out.be(
      `button`,
      { id: `class`, "data-parent": input.count },
      `0`,
      _component,
      null,
      0,
      { onclick: _componentDef.d(`click`, `increment`, !1) },
    ),
      out.t(state.count, _component),
      out.ee());
  },
  { t: `a` },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )),
  _._resume(`a`, _marko_template));
const $dynamicTag = _._dynamic_tag(2),
  $count__script = _._script(`b0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $dynamicTag($scope, _marko_template, () => ({ count: $scope.d })),
      $count__script($scope));
  });
(init(), init$1());
