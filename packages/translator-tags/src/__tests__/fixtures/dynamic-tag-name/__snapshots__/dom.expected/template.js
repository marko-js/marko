import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { attr as _attr, bindRenderer as _bindRenderer, createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, intersections as _intersections, values as _values, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { setup as _setup, template as _undefined_template, walks as _undefined_walks } from "./components/tag-a/index.marko";
const _showTagATagABody = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Body content", ""));
const _largeHeadingH2_input = _dynamicTagAttrs("#text/9");
const _expr__dynamicTagName5_other = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/9": _dynamicTagName5,
    other
  } = _scope;
  _largeHeadingH2_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _showTagATagATagB_input = _dynamicTagAttrs("#text/5");
const _expr__dynamicTagName4_other = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/5": _dynamicTagName4,
    other
  } = _scope;
  _showTagATagATagB_input(_scope, () => ({
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other
  }));
});
const _isLargeH1H2_input = _dynamicTagAttrs("#text/4");
const _expr__dynamicTagName3_other = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/4": _dynamicTagName3,
    other
  } = _scope;
  _isLargeH1H2_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _x_input = _dynamicTagAttrs("#text/1");
const _expr__dynamicTagName2_other = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/1": _dynamicTagName2,
    other
  } = _scope;
  _x_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _renderBody_input = _dynamicTagAttrs("#text/0");
const _expr__dynamicTagName_other = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/0": _dynamicTagName,
    other
  } = _scope;
  _renderBody_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _dynamicTagName5 = /* @__PURE__ */_conditional("#text/9", null, _expr__dynamicTagName5_other);
const _dynamicTagName4 = /* @__PURE__ */_conditional("#text/5", null, _expr__dynamicTagName4_other);
const _dynamicTagName3 = /* @__PURE__ */_conditional("#text/4", null, _expr__dynamicTagName3_other);
const _dynamicTagName2 = /* @__PURE__ */_conditional("#text/1", null, _expr__dynamicTagName2_other);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr__dynamicTagName_other);
const _tagConstB = (_scope, tagConstB) => {};
const _tagConstA = (_scope, tagConstA) => {};
const _largeHeading = /* @__PURE__ */_value("largeHeading", (_scope, largeHeading) => _dynamicTagName5(_scope, largeHeading || "h2"), void 0, _dynamicTagName5);
const _other = /* @__PURE__ */_value("other", (_scope, other) => {
  _attr(_scope["#showDivNull/2"], "other", other);
  _attr(_scope["#showDiv/3"], "other", other);
  _attr(_scope["#globalXAB/10"], "other", other);
  _attr(_scope["#hLevel/11"], "other", other);
  _attr(_scope["#h$Level/12"], "other", other);
  _attr(_scope["#tagConstA/13"], "other", other);
  _attr(_scope["#tagConstB/14"], "other", other);
}, _intersections([_expr__dynamicTagName_other, _expr__dynamicTagName2_other, _expr__dynamicTagName3_other, _expr__dynamicTagName4_other, _expr__dynamicTagName5_other]));
const _level = (_scope, level) => {};
const _tag = (_scope, tag) => {};
const _isLarge = /* @__PURE__ */_value("isLarge", (_scope, isLarge) => {
  _dynamicTagName3(_scope, isLarge ? "h1" : "h2");
  _largeHeading(_scope, isLarge && "h1");
}, void 0, _values([_dynamicTagName3, _largeHeading]));
const _showTagA = /* @__PURE__ */_value("showTagA", (_scope, showTagA) => _dynamicTagName4(_scope, showTagA ? tagA : tagB), void 0, _dynamicTagName4);
const _show = /* @__PURE__ */_value("show", (_scope, show) => _tagConstB(_scope, show ? "div" : null));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _dynamicTagName2(_scope, x), void 0, _dynamicTagName2);
const _renderBody = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), void 0, _dynamicTagName);
const _setup2 = _scope => {
  _setup(_scope["#childScope/6"]);
  _setup(_scope["#childScope/7"]);
  _setup(_scope["#childScope/8"]);
  _tagConstA(_scope, "a");
};
export const args = (_scope, _destructure, _clean) => {
  let renderBody, x, show, showTagA, isLarge, tag, level, other;
  if (!_clean) [{
    renderBody,
    x,
    show,
    showTagA,
    isLarge,
    tag,
    level,
    other
  }] = _destructure;
  _renderBody(_scope, renderBody, _clean);
  _x(_scope, x, _clean);
  _show(_scope, show, _clean);
  _showTagA(_scope, showTagA, _clean);
  _isLarge(_scope, isLarge, _clean);
  _tag(_scope, tag, _clean);
  _level(_scope, level, _clean);
  _other(_scope, other, _clean);
};
export { _renderBody, _x, _show, _showTagA, _isLarge, _tag, _level, _other };
export const template = `<!><!><!><${show ? "div" : null} class="a b"></${show ? "div" : null}><${show && "div"} class="a b"></${show && "div"}><!><!>${_undefined_template}${_undefined_template}${_undefined_template}<!><${global.x = "a" + "b"} class="a b"></${global.x = "a" + "b"}><${"h" + level} class="a b"></${"h" + level}><h${level} class="a b"></h${level}><${tagConstA} class="a b"></${tagConstA}><${tagConstB} class="a b"></${tagConstB}><!>`;
export const walks = /* replace, over(1), replace, over(1), get, over(1), get, over(1), replace, over(1), replace, over(1), beginChild, _undefined_walks, endChild, beginChild, _undefined_walks, endChild, beginChild, _undefined_walks, endChild, replace, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */`D%b%b b b%b%b/${_undefined_walks}&/${_undefined_walks}&/${_undefined_walks}&%b b b b b bD`;
export const setup = _setup2;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko");