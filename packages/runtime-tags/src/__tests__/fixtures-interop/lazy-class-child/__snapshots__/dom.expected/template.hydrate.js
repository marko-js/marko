// size: 346 (min) 220 (brotli)
const _marko_template = t(`b`);
r(`b`, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.state = { show: !1 };
  },
  toggle() {
    this.state.show = !this.state.show;
  },
};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    (out.be(`button`, { id: `toggle` }, `0`, _component, null, 1, {
      onclick: _componentDef.d(`click`, `toggle`, !1),
    }),
      out.t(`toggle`, _component),
      out.ee(),
      state.show &&
        _marko_tag(
          _marko_lazy_tag(() => import(`./child-KoHnuZ_S.js`)),
          { value: 42 },
          out,
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

// size: 166 (min) 123 (brotli)
// chunk: child
const _marko_template = t(`a`);
r(`a`, () => _marko_template);
const _marko_component = {};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    (out.be(`span`, { id: `child` }, `0`, _component, null, 1),
      out.t(input.value, _component),
      out.ee());
  },
  { t: `a`, i: !0 },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )));
