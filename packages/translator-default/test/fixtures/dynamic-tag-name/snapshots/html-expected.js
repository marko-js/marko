const _marko_template = _t();

export default _marko_template;
import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/dynamic-tag-name/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_dynamic_tag(out, input, null, null, null, null, _component, "0");

  _marko_dynamic_tag(out, input.x, null, null, null, null, _component, "1");

  const _tagName = input.show ? "div" : null;

  if (_tagName) out.w(`<${_tagName}></${_tagName}>`);else out.bf("f_2", component);

  const _tagName2 = input.show && "div";

  if (_tagName2) out.w(`<${_tagName2}></${_tagName2}>`);else out.bf("f_3", component);

  const _tagName3 = input.large ? "h1" : "h2";

  out.w(`<${_tagName3}></${_tagName3}>`);

  const _tagName4 = input.showTagA ? tagA : tagB;

  _marko_tag(_tagName4, {}, out, _component, "5");

  const _tagName5 = input.showTagA && tagA;

  if (_tagName5) _marko_tag(_tagName5, {}, out, _component, "6");

  const _tagName6 = input.showTagA && tagA;

  const _renderBody = out => {
    out.w("Body content");
  };

  if (_tagName6) _marko_tag(_tagName6, {
    "renderBody": _renderBody
  }, out, _component, "7");else _renderBody(out);

  _marko_dynamic_tag(out, input.tag || tagA, null, null, null, null, _component, "8");

  const largeHeading = input.isLarge && "h1";

  const _tagName7 = largeHeading || "h2";

  if (_tagName7) out.w(`<${_tagName7}></${_tagName7}>`);else out.bf("f_9", component);

  const _tagName8 = global.x = "a" + "b";

  out.w(`<${_tagName8}></${_tagName8}>`);

  const _tagName9 = "h" + input.level;

  out.w(`<${_tagName9}></${_tagName9}>`);
  const _tagName10 = `h${input.level}`;
  out.w(`<${_tagName10}></${_tagName10}>`);
  const tagConstA = "a";
  out.w(`<${tagConstA}></${tagConstA}>`);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.w(`<${tagConstB}></${tagConstB}>`);else out.bf("f_14", component);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.w(`<${tagLazyAssign}></${tagLazyAssign}>`);else out.bf("f_15", component);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.w(`<${tagLazyAssign}></${tagLazyAssign}>`);else out.bf("f_16", component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);