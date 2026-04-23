// size: 438 (min) 255 (brotli)
const _marko_template = t(`a`);
r(`a`, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.state = { count: 0 };
  },
  handleClick() {
    (this.state.count++, this.emit(`count`, this.state.count));
  },
};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    (out.be(`button`, { id: `class-api` }, `0`, _component, null, 1, {
      onclick: _componentDef.d(`click`, `handleClick`, !1),
    }),
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
  _._resume_dynamic_tag());
const $count = _._let(2, ($scope) => _._text($scope.b, $scope.c));
function $onCount($scope) {
  return function (newCount) {
    $count($scope, newCount);
  };
}
(_._resume(`b0`, $onCount), init(), init$1());
