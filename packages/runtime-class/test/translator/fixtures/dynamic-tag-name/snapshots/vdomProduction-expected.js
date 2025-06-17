import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "$1o42tP",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
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
  if (_tagName) out.e(_tagName, {
    "class": "a b",
    "other": input.other
  }, "2", _component, 0, 0);
  const _tagName2 = input.show ? "div" : null;
  if (_tagName2) out.be(_tagName2, {
    "class": "a b",
    "other": input.other
  }, "3", _component, null, 0);else out.bf("f_3", _component);
  out.t("Body Content", _component);
  if (_tagName2) out.ee();else out.ef();
  const _tagName3 = input.show && "div";
  if (_tagName3) out.e(_tagName3, {
    "class": "a b",
    "other": input.other
  }, "4", _component, 0, 0);
  const _tagName4 = input.large ? "h1" : "h2";
  out.e(_tagName4, {
    "class": "a b",
    "other": input.other
  }, "5", _component, 0, 0);
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
    out.t("Body content", _component);
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
  if (_tagName8) out.e(_tagName8, {
    "class": "a b",
    "other": input.other
  }, "10", _component, 0, 0);
  const _tagName9 = global.x = "a" + "b";
  out.e(_tagName9, {
    "class": "a b",
    "other": input.other
  }, "11", _component, 0, 0);
  const _tagName10 = "h" + input.level;
  out.e(_tagName10, {
    "class": "a b",
    "other": input.other
  }, "12", _component, 0, 0);
  const _tagName11 = `h${input.level}`;
  out.e(_tagName11, {
    "class": "a b",
    "other": input.other
  }, "13", _component, 0, 0);
  const tagConstA = "a";
  out.e(tagConstA, {
    "class": "a b",
    "other": input.other
  }, "14", _component, 0, 0);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.e(tagConstB, {
    "class": "a b",
    "other": input.other
  }, "15", _component, 0, 0);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.e(tagLazyAssign, {
    "class": "a b",
    "other": input.other
  }, "16", _component, 0, 0);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.e(tagLazyAssign, {
    "class": "a b",
    "other": input.other
  }, "17", _component, 0, 0);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);