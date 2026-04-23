// size: 151 (min) 114 (brotli)
const _marko_template = t(`a`),
  _marko_node = _marko_constElement(`h1`, null, 1).t(`Hello world`);
r(`a`, () => _marko_template);
const _marko_component = {};
((_marko_template._ = _marko_renderer(
  function (input, out, _componentDef, _component, state, $global) {
    out.n(_marko_node, _component);
  },
  { t: `a` },
  _marko_component,
)),
  (_marko_template.Component = _marko_defineComponent(
    _marko_component,
    _marko_template._,
  )),
  init(),
  init$1());
