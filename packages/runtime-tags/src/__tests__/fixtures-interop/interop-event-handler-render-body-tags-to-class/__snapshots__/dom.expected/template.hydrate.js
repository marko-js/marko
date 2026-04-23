// size: 520 (min) 294 (brotli)
const _marko_template = t(`a`);
r(`a`, () => _marko_template);
const _marko_component = {};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    (out.be(`button`, null, `0`, _component, null, 0, {
      onclick: _componentDef.d(`click`, `emit`, !1, [`click`]),
    }),
      _marko_dynamic_tag(
        out,
        input.renderBody,
        null,
        null,
        null,
        null,
        _componentDef,
        `1`,
      ),
      out.ee());
  },
  { t: `a`, s: !0 },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )),
  _._resume(`a`, _marko_template),
  _._resume_dynamic_tag());
const $mybutton_content__count = _._closure_get(1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $mybutton_content__setup = $mybutton_content__count,
  $mybutton_content = _._content_resume(
    `b1`,
    ` `,
    ` b`,
    $mybutton_content__setup,
  ),
  $dynamicTag = _._dynamic_tag(0, $mybutton_content),
  $count__closure = _._closure($mybutton_content__count),
  $count = _._let(1, ($scope) => {
    ($dynamicTag($scope, _marko_template, () => ({
      onClick: $onClick($scope),
    })),
      $count__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $count($scope, $scope.b + 1);
  };
}
(_._resume(`b0`, $onClick), init(), init$1());
