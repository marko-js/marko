// size: 748 (min) 406 (brotli)
const $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $input_content__OR__count = _._or(7, ($scope) =>
    $dynamicTag($scope, $scope.f, () => [$scope.g, `hello`]),
  ),
  $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.g + 1);
    }),
  ),
  $count = _._let(6, ($scope) => {
    (_._text($scope.b, $scope.g),
      $input_content__OR__count($scope),
      $count__script($scope));
  });
function $setup($scope) {
  $count($scope, 0);
}
const $input_content = _._const(5, $input_content__OR__count);
var tags_layout_default = _._template(
  `a`,
  `<button id=tags> </button><div><!></div>`,
  ` D lD%l`,
  $setup,
  ($scope, input) => $input_content($scope, input.content),
);
const _marko_template = t(`b`);
r(`b`, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.state = { multiplier: 1 };
  },
  increment() {
    this.state.multiplier++;
  },
};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    _marko_dynamic_tag(
      out,
      tags_layout_default,
      null,
      (out, baseCount, message) => {
        (out.be(`h1`, null, `1`, _component, null, 0),
          out.t(message, _component),
          out.ee(),
          out.be(`button`, { id: `class` }, `2`, _component, null, 1, {
            onclick: _componentDef.d(`click`, `increment`, !1),
          }),
          out.t(state.multiplier, _component),
          out.t(` * `, _component),
          out.t(baseCount, _component),
          out.t(` = `, _component),
          out.t(baseCount * state.multiplier, _component),
          out.ee());
      },
      null,
      null,
      _componentDef,
      `0`,
    );
  },
  { t: `b` },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )),
  init());
