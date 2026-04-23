// size: 634 (min) 360 (brotli)
const $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.h + 1);
    }),
  ),
  $count = _._let(7, ($scope) => {
    (_._text($scope.b, $scope.h), $count__script($scope));
  });
function $setup($scope) {
  $count($scope, 0);
}
const $dynamicTag = _._dynamic_tag(2),
  $input_stuff_content = ($scope, input_stuff_content) =>
    $dynamicTag($scope, input_stuff_content),
  $input = ($scope, input) => $input_stuff($scope, input.stuff),
  $input_stuff = ($scope, input_stuff) =>
    $input_stuff_content($scope, input_stuff?.content);
var tags_layout_default = _._template(
  `a`,
  `<button id=tags> </button><div><!></div>`,
  ` D lD%l`,
  $setup,
  $input,
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
    _marko_dynamic_tag(
      out,
      tags_layout_default,
      () =>
        i(() => {
          a(`stuff`, {
            content: (out) => {
              (out.be(`button`, { id: `class` }, `1`, _component, null, 1, {
                onclick: _componentDef.d(`click`, `increment`, !1),
              }),
                out.t(state.count, _component),
                out.ee());
            },
          });
        }),
      null,
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
