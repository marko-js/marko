// size: 573 (min) 324 (brotli)
const $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.f + 1);
    }),
  ),
  $count = _._let(5, ($scope) => {
    (_._text($scope.b, $scope.f), $count__script($scope));
  });
function $setup($scope) {
  $count($scope, 0);
}
const $input_count = ($scope, input_count) =>
  _._attr($scope.a, `data-parent`, input_count);
var tags_counter_default = _._template(
  `a`,
  `<button id=tags> </button>`,
  ` D l`,
  $setup,
  ($scope, input) => $input_count($scope, input.count),
);
const _marko_template = t(`b`);
r(`b`, () => _marko_template);
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
    (out.be(`button`, { id: `class` }, `0`, _component, null, 1, {
      onclick: _componentDef.d(`click`, `increment`, !1),
    }),
      out.t(state.count, _component),
      out.ee(),
      _marko_dynamic_tag(
        out,
        tags_counter_default,
        () => ({ count: state.count }),
        null,
        null,
        null,
        _componentDef,
        `1`,
      ));
  },
  { t: `b` },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )),
  init());
