export const _template_ = `<!><!><!><${show ? "div" : null} class="a b"></${show ? "div" : null}><${show && "div"} class="a b"></${show && "div"}><!><!>${_tag_template}${_tag_template}<!><!><${global.x = "a" + "b"} class="a b"></${global.x = "a" + "b"}><${"h" + level} class="a b"></${"h" + level}><h${level} class="a b"></h${level}><${tagConstA} class="a b"></${tagConstA}><${tagConstB} class="a b"></${tagConstB}><!>`;
export const _walks_ = /* replace, over(1), replace, over(1), get, over(1), get, over(1), replace, over(1), replace, over(1), beginChild, _tag_walks, endChild, beginChild, _tag_walks, endChild, replace, over(1), replace, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */`D%b%b b b%b%b/${_tag_walks}&/${_tag_walks}&%b%b b b b b bD`;
import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { attr as _attr, createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, intersections as _intersections, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _tag, _template_ as _tag_template, _walks_ as _tag_walks } from "./components/tag-a/index.marko";
const _showTagATagABody = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Body content", ""));
const _largeHeadingH2_input = _dynamicTagAttrs("#text/9");
const _expr_Text_other6 = /* @__PURE__ */_intersection(2, _scope => {
  const {
    other
  } = _scope;
  _largeHeadingH2_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _tagTagA_input = _dynamicTagAttrs("#text/8");
const _expr_Text_other5 = /* @__PURE__ */_intersection(2, _scope => {
  const {
    other
  } = _scope;
  _tagTagA_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _showTagATagATagB_input = _dynamicTagAttrs("#text/5");
const _expr_Text_other4 = /* @__PURE__ */_intersection(2, _scope => {
  const {
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
const _expr_Text_other3 = /* @__PURE__ */_intersection(2, _scope => {
  const {
    other
  } = _scope;
  _isLargeH1H2_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _x_input = _dynamicTagAttrs("#text/1");
const _expr_Text_other2 = /* @__PURE__ */_intersection(2, _scope => {
  const {
    other
  } = _scope;
  _x_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _renderBody_input = _dynamicTagAttrs("#text/0");
const _expr_Text_other = /* @__PURE__ */_intersection(2, _scope => {
  const {
    other
  } = _scope;
  _renderBody_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _dynamicTagName6 = /* @__PURE__ */_conditional("#text/9", null, _expr_Text_other6);
const _dynamicTagName5 = /* @__PURE__ */_conditional("#text/8", null, _expr_Text_other5);
const _dynamicTagName4 = /* @__PURE__ */_conditional("#text/5", null, _expr_Text_other4);
const _dynamicTagName3 = /* @__PURE__ */_conditional("#text/4", null, _expr_Text_other3);
const _dynamicTagName2 = /* @__PURE__ */_conditional("#text/1", null, _expr_Text_other2);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr_Text_other);
const _tagConstB = /* @__PURE__ */_value("tagConstB");
const _tagConstA = /* @__PURE__ */_value("tagConstA");
const _largeHeading = /* @__PURE__ */_value("largeHeading", (_scope, largeHeading) => _dynamicTagName6(_scope, largeHeading || "h2"), _dynamicTagName6);
export const _other_ = /* @__PURE__ */_value("other", (_scope, other) => {
  _attr(_scope["#showDivNull/2"], "other", other);
  _attr(_scope["#showDiv/3"], "other", other);
  _attr(_scope["#globalXAB/10"], "other", other);
  _attr(_scope["#hLevel/11"], "other", other);
  _attr(_scope["#h$Level/12"], "other", other);
  _attr(_scope["#tagConstA/13"], "other", other);
  _attr(_scope["#tagConstB/14"], "other", other);
}, _intersections([_expr_Text_other, _expr_Text_other2, _expr_Text_other3, _expr_Text_other4, _expr_Text_other5, _expr_Text_other6]));
export const _level_ = /* @__PURE__ */_value("level");
export const _tag_ = /* @__PURE__ */_value("tag", (_scope, tag) => _dynamicTagName5(_scope, tag || tagA), _dynamicTagName5);
export const _isLarge_ = /* @__PURE__ */_value("isLarge", (_scope, isLarge) => {
  _dynamicTagName3(_scope, isLarge ? "h1" : "h2");
  _largeHeading(_scope, isLarge && "h1");
}, _intersections([_dynamicTagName3, _largeHeading]));
export const _showTagA_ = /* @__PURE__ */_value("showTagA", (_scope, showTagA) => _dynamicTagName4(_scope, showTagA ? tagA : tagB), _dynamicTagName4);
export const _show_ = /* @__PURE__ */_value("show", (_scope, show) => _tagConstB(_scope, show ? "div" : null));
export const _x_ = /* @__PURE__ */_value("x", (_scope, x) => _dynamicTagName2(_scope, x), _dynamicTagName2);
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), _dynamicTagName);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _renderBody_(_scope, input.renderBody);
  _x_(_scope, input.x);
  _show_(_scope, input.show);
  _showTagA_(_scope, input.showTagA);
  _isLarge_(_scope, input.isLarge);
  _tag_(_scope, input.tag);
  _level_(_scope, input.level);
  _other_(_scope, input.other);
}, _intersections([_renderBody_, _x_, _showTagA_, _isLarge_, _tag_, _other_]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), _input_);
export function _setup_(_scope) {
  _tag(_scope["#childScope/6"]);
  _tag(_scope["#childScope/7"]);
  _tagConstA(_scope, "a");
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko");