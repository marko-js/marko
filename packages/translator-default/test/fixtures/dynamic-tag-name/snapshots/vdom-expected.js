import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/dynamic-tag-name/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
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
  }, "2", _component, 0, 0);else out.bf("f_2", _component);
  const _tagName2 = input.show && "div";
  if (_tagName2) out.e(_tagName2, {
    "class": "a b",
    "other": input.other
  }, "3", _component, 0, 0);else out.bf("f_3", _component);
  const _tagName3 = input.large ? "h1" : "h2";
  out.e(_tagName3, {
    "class": "a b",
    "other": input.other
  }, "4", _component, 0, 0);
  const _tagName4 = input.showTagA ? tagA : tagB;
  _marko_tag(_tagName4, {
    "class": ["a", "b"],
    "other": input.other,
    "class": ["a", "b"],
    "other": input.other
  }, out, _componentDef, "5");
  const _tagName5 = input.showTagA && tagA;
  if (_tagName5) _marko_tag(_tagName5, {
    "class": ["a", "b"],
    "other": input.other
  }, out, _componentDef, "6");
  const _tagName6 = input.showTagA && tagA;
  const _renderBody = out => {
    out.t("Body content", _component);
  };
  if (_tagName6) _marko_tag(_tagName6, {
    "class": ["a", "b"],
    "other": input.other,
    "renderBody": _renderBody
  }, out, _componentDef, "7");else _renderBody(out);
  _marko_dynamic_tag(out, input.tag || tagA, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "8");
  const largeHeading = input.isLarge && "h1";
  const _tagName7 = largeHeading || "h2";
  if (_tagName7) out.e(_tagName7, {
    "class": "a b",
    "other": input.other
  }, "9", _component, 0, 0);else out.bf("f_9", _component);
  const _tagName8 = global.x = "a" + "b";
  out.e(_tagName8, {
    "class": "a b",
    "other": input.other
  }, "10", _component, 0, 0);
  const _tagName9 = "h" + input.level;
  out.e(_tagName9, {
    "class": "a b",
    "other": input.other
  }, "11", _component, 0, 0);
  const _tagName10 = `h${input.level}`;
  out.e(_tagName10, {
    "class": "a b",
    "other": input.other
  }, "12", _component, 0, 0);
  const tagConstA = "a";
  out.e(tagConstA, {
    "class": "a b",
    "other": input.other
  }, "13", _component, 0, 0);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.e(tagConstB, {
    "class": "a b",
    "other": input.other
  }, "14", _component, 0, 0);else out.bf("f_14", _component);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.e(tagLazyAssign, {
    "class": "a b",
    "other": input.other
  }, "15", _component, 0, 0);else out.bf("f_15", _component);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.e(tagLazyAssign, {
    "class": "a b",
    "other": input.other
  }, "16", _component, 0, 0);else out.bf("f_16", _component);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);