// size: 578 (min) 326 (brotli)
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
    (out.be(`button`, { id: `class` }, `0`, _component, null, 1, {
      onclick: _componentDef.d(`click`, `increment`, !1),
    }),
      out.t(state.count, _component),
      out.ee(),
      out.be(`div`, null, `1`, _component, null, 0),
      _marko_dynamic_tag(
        out,
        input.renderBody,
        null,
        null,
        null,
        null,
        _componentDef,
        `2`,
      ),
      out.ee());
  },
  { t: `a` },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )));
const $classlayout_content__count__script = _._script(`b0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope._, $scope._.b + 1);
    }),
  ),
  $classlayout_content__count = _._closure_get(1, ($scope) => {
    (_._text($scope.b, $scope._.b),
      $classlayout_content__count__script($scope));
  }),
  $classlayout_content__setup = $classlayout_content__count;
_._content_resume(
  `b1`,
  `<button id=tags> </button>`,
  ` D l`,
  $classlayout_content__setup,
);
const $count__closure = _._closure($classlayout_content__count),
  $count = _._let(1, $count__closure);
(init(), init$1());
