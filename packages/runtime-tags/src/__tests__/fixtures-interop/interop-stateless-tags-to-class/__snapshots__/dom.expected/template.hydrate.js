// size: 400 (min) 237 (brotli)
const _marko_template = t(`a`);
r(`a`, () => _marko_split_component);
const _marko_component = {};
((_marko_split_component.renderer = _marko_template._ =
  _marko_renderer(
    function (input, out, _componentDef, _component, state, $global) {
      (out.be(`button`, _marko_attrs(input), `0`, _component, null, 4, {
        onclick: _componentDef.d(`click`, `handleClick`, !1),
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
  _._resume_dynamic_tag(),
  _._content_resume(`b1`, `Say Hi`, `b`));
function $onClick() {
  document.getElementById(`display`).innerHTML = `Hi!`;
}
(_._resume(`b0`, $onClick), register(`a`, component_0), init(), init$1());
