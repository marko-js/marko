import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "qokcYeg",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, input, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "0");
  _marko_dynamic_tag(out, input.x, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "1");
  const _tagName = input.show ? "div" : null;
  if (_tagName) out.w(`<${_tagName} class="a b"${_marko_attr("other", input.other)}></${_tagName}>`);
  const _tagName2 = input.show ? "div" : null;
  if (_tagName2) out.w(`<${_tagName2} class="a b"${_marko_attr("other", input.other)}>`);else out.bf("f_3", _component, 1);
  out.w("Body Content");
  if (_tagName2) out.w(`</${_tagName2}>`);else out.ef();
  const _tagName3 = input.show && "div";
  if (_tagName3) out.w(`<${_tagName3} class="a b"${_marko_attr("other", input.other)}></${_tagName3}>`);
  const _tagName4 = input.large ? "h1" : "h2";
  out.w(`<${_tagName4} class="a b"${_marko_attr("other", input.other)}></${_tagName4}>`);
  const _tagName5 = input.showTagA ? tagA : tagB;
  _marko_tag(_tagName5, {
    "class": ["a", "b"],
    "other": input.other,
    "class": ["a", "b"],
    "other": input.other
  }, out, _componentDef, "6");
  const _tagName6 = input.showTagA && tagA;
  if (_tagName6) _marko_tag(_tagName6, {
    "class": ["a", "b"],
    "other": input.other
  }, out, _componentDef, "7");
  const _tagName7 = input.showTagA && tagA;
  const _renderBody = out => {
    out.w("Body content");
  };
  if (_tagName7) _marko_tag(_tagName7, {
    "class": ["a", "b"],
    "other": input.other,
    "renderBody": _renderBody
  }, out, _componentDef, "8");else _renderBody(out);
  _marko_dynamic_tag(out, input.tag || tagA, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "9");
  const largeHeading = input.isLarge && "h1";
  const _tagName8 = largeHeading || "h2";
  if (_tagName8) out.w(`<${_tagName8} class="a b"${_marko_attr("other", input.other)}></${_tagName8}>`);
  const _tagName9 = global.x = "a" + "b";
  out.w(`<${_tagName9} class="a b"${_marko_attr("other", input.other)}></${_tagName9}>`);
  const _tagName10 = "h" + input.level;
  out.w(`<${_tagName10} class="a b"${_marko_attr("other", input.other)}></${_tagName10}>`);
  const _tagName11 = `h${input.level}`;
  out.w(`<${_tagName11} class="a b"${_marko_attr("other", input.other)}></${_tagName11}>`);
  const tagConstA = "a";
  out.w(`<${tagConstA} class="a b"${_marko_attr("other", input.other)}></${tagConstA}>`);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.w(`<${tagConstB} class="a b"${_marko_attr("other", input.other)}></${tagConstB}>`);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.w(`<${tagLazyAssign} class="a b"${_marko_attr("other", input.other)}></${tagLazyAssign}>`);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.w(`<${tagLazyAssign} class="a b"${_marko_attr("other", input.other)}></${tagLazyAssign}>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);