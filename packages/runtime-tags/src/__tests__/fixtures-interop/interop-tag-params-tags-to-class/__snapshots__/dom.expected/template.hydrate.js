// size: 758 (min) 417 (brotli)
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
        [state.count, `hello`],
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
const $classlayout_content__multiplier__OR__baseCount = _._or(7, ($scope) =>
    _._text($scope.e, $scope._.b * $scope.g),
  ),
  $classlayout_content__multiplier__script = _._script(`b0`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $multiplier($scope._, $scope._.b + 1);
    }),
  ),
  $classlayout_content__multiplier = _._closure_get(1, ($scope) => {
    (_._text($scope.c, $scope._.b),
      $classlayout_content__multiplier__OR__baseCount($scope),
      $classlayout_content__multiplier__script($scope));
  }),
  $classlayout_content__setup = $classlayout_content__multiplier,
  $classlayout_content__message = ($scope, message) =>
    _._text($scope.a, message),
  $classlayout_content__baseCount = _._const(6, ($scope) => {
    (_._text($scope.d, $scope.g),
      $classlayout_content__multiplier__OR__baseCount($scope));
  });
_._content_resume(
  `b1`,
  `<h1> </h1><button id=tags><!> * <!> = <!></button>`,
  `D l D%c%c%l`,
  $classlayout_content__setup,
  ($scope, $params2) => {
    ($classlayout_content__baseCount($scope, $params2[0]),
      $classlayout_content__message($scope, $params2[1]));
  },
);
const $multiplier__closure = _._closure($classlayout_content__multiplier),
  $multiplier = _._let(1, $multiplier__closure);
(init(), init$1());
