const _marko_template = _t();

export default _marko_template;
import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("FiPq+pCl", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_dynamic_tag(out, input, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _component, "0");

  _marko_dynamic_tag(out, input.x, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _component, "1");

  const _tagName = input.show ? "div" : null;

  if (_tagName) out.e(_tagName, {
    "class": "a b",
    "other": input.other
  }, "2", component, 0, 0);else out.bf("f_2", component);

  const _tagName2 = input.show && "div";

  if (_tagName2) out.e(_tagName2, {
    "class": "a b",
    "other": input.other
  }, "3", component, 0, 0);else out.bf("f_3", component);

  const _tagName3 = input.large ? "h1" : "h2";

  out.e(_tagName3, {
    "class": "a b",
    "other": input.other
  }, "4", component, 0, 0);

  const _tagName4 = input.showTagA ? tagA : tagB;

  _marko_tag(_tagName4, {
    "class": ["a", "b"],
    "other": input.other,
    "class": ["a", "b"],
    "other": input.other
  }, out, _component, "5");

  const _tagName5 = input.showTagA && tagA;

  if (_tagName5) _marko_tag(_tagName5, {
    "class": ["a", "b"],
    "other": input.other
  }, out, _component, "6");

  const _tagName6 = input.showTagA && tagA;

  const _renderBody = out => {
    out.t("Body content", component);
  };

  if (_tagName6) _marko_tag(_tagName6, {
    "class": ["a", "b"],
    "other": input.other,
    "renderBody": _renderBody
  }, out, _component, "7");else _renderBody(out);

  _marko_dynamic_tag(out, input.tag || tagA, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _component, "8");

  const largeHeading = input.isLarge && "h1";

  const _tagName7 = largeHeading || "h2";

  if (_tagName7) out.e(_tagName7, {
    "class": "a b",
    "other": input.other
  }, "9", component, 0, 0);else out.bf("f_9", component);

  const _tagName8 = global.x = "a" + "b";

  out.e(_tagName8, {
    "class": "a b",
    "other": input.other
  }, "10", component, 0, 0);

  const _tagName9 = "h" + input.level;

  out.e(_tagName9, {
    "class": "a b",
    "other": input.other
  }, "11", component, 0, 0);
  const _tagName10 = `h${input.level}`;
  out.e(_tagName10, {
    "class": "a b",
    "other": input.other
  }, "12", component, 0, 0);
  const tagConstA = "a";
  out.e(tagConstA, {
    "class": "a b",
    "other": input.other
  }, "13", component, 0, 0);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.e(tagConstB, {
    "class": "a b",
    "other": input.other
  }, "14", component, 0, 0);else out.bf("f_14", component);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.e(tagLazyAssign, {
    "class": "a b",
    "other": input.other
  }, "15", component, 0, 0);else out.bf("f_15", component);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.e(tagLazyAssign, {
    "class": "a b",
    "other": input.other
  }, "16", component, 0, 0);else out.bf("f_16", component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);