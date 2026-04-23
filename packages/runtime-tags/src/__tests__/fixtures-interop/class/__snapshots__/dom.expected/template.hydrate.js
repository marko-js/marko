// size: 261 (min) 169 (brotli)
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
    (out.be(`button`, null, `0`, _component, null, 0, {
      onclick: _componentDef.d(`click`, `increment`, !1),
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
  init());
