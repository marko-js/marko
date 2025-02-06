export const _template_ = `<!><!><!><${show ? "div" : null} class="a b"></${show ? "div" : null}><${show && "div"} class="a b"></${show && "div"}><!><!>${_tag_template}${_tag_template}<!><!><${global.x = "a" + "b"} class="a b"></${global.x = "a" + "b"}><${"h" + level} class="a b"></${"h" + level}><h${level} class="a b"></h${level}><${tagConstA} class="a b"></${tagConstA}><${tagConstB} class="a b"></${tagConstB}><!>`;
export const _walks_ = /* replace, over(1), replace, over(1), get, over(1), get, over(1), replace, over(1), replace, over(1), beginChild, _tag_walks, endChild, beginChild, _tag_walks, endChild, replace, over(1), replace, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */`D%b%b b b%b%b/${_tag_walks}&/${_tag_walks}&%b%b b b b b bD`;
import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _tag, _className_ as _tag_input_class, _other_ as _tag_input_other, _content_ as _tag_input_content, _template_ as _tag_template, _walks_ as _tag_walks } from "./tags/tag-a/index.marko";
const _showTagATagA_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Body content", ""));
const _largeHeadingH2_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/9");
const _expr_Text_other6 = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    other
  } = _scope;
  _largeHeadingH2_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
}, () => _largeHeadingH2_input);
const _tagTagA_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/8");
const _expr_Text_other5 = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    other
  } = _scope;
  _tagTagA_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
}, () => _tagTagA_input);
const _showTagATagATagB_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/5");
const _expr_Text_other4 = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    other
  } = _scope;
  _showTagATagATagB_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
}, () => _showTagATagATagB_input);
const _isLargeH1H2_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/4");
const _expr_Text_other3 = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    other
  } = _scope;
  _isLargeH1H2_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
}, () => _isLargeH1H2_input);
const _x_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/1");
const _expr_Text_other2 = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    other
  } = _scope;
  _x_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
}, () => _x_input);
const _content_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/0");
const _expr_Text_other = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    other
  } = _scope;
  _content_input(_scope, () => ({
    class: ["a", "b"],
    other: other
  }));
}, () => _content_input);
const _dynamicTagName6 = /* @__PURE__ */_$.conditional("#text/9", 0, () => _expr_Text_other6);
const _dynamicTagName5 = /* @__PURE__ */_$.conditional("#text/8", 0, () => _expr_Text_other5);
const _dynamicTagName4 = /* @__PURE__ */_$.conditional("#text/5", 0, () => _expr_Text_other4);
const _dynamicTagName3 = /* @__PURE__ */_$.conditional("#text/4", 0, () => _expr_Text_other3);
const _dynamicTagName2 = /* @__PURE__ */_$.conditional("#text/1", 0, () => _expr_Text_other2);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", 0, () => _expr_Text_other);
const _tagConstB = /* @__PURE__ */_$.value("tagConstB", 0);
const _tagConstA = /* @__PURE__ */_$.value("tagConstA", 0);
const _largeHeading = /* @__PURE__ */_$.value("largeHeading", (_scope, largeHeading) => _dynamicTagName6(_scope, largeHeading || "h2"), () => _dynamicTagName6);
export const _other_ = /* @__PURE__ */_$.value("other", (_scope, other) => {
  _$.attr(_scope["#showDivNull/2"], "other", other);
  _$.attr(_scope["#showDiv/3"], "other", other);
  _$.attr(_scope["#globalXAB/10"], "other", other);
  _$.attr(_scope["#hLevel/11"], "other", other);
  _$.attr(_scope["#h$Level/12"], "other", other);
  _$.attr(_scope["#tagConstA/13"], "other", other);
  _$.attr(_scope["#tagConstB/14"], "other", other);
  _tag_input_other(_scope["#childScope/6"], other);
  _tag_input_other(_scope["#childScope/7"], other);
}, () => _$.intersections([_expr_Text_other, _expr_Text_other2, _expr_Text_other3, _expr_Text_other4, _expr_Text_other5, _expr_Text_other6, /* @__PURE__ */_$.inChild("#childScope/6", _tag_input_other), /* @__PURE__ */_$.inChild("#childScope/7", _tag_input_other)]));
export const _level_ = /* @__PURE__ */_$.value("level", 0);
export const _tag_ = /* @__PURE__ */_$.value("tag", (_scope, tag) => _dynamicTagName5(_scope, tag || tagA), () => _dynamicTagName5);
export const _isLarge_ = /* @__PURE__ */_$.value("isLarge", (_scope, isLarge) => {
  _dynamicTagName3(_scope, isLarge ? "h1" : "h2");
  _largeHeading(_scope, isLarge && "h1");
}, () => _$.intersections([_dynamicTagName3, _largeHeading]));
export const _showTagA_ = /* @__PURE__ */_$.value("showTagA", (_scope, showTagA) => _dynamicTagName4(_scope, showTagA ? tagA : tagB), () => _dynamicTagName4);
export const _show_ = /* @__PURE__ */_$.value("show", (_scope, show) => _tagConstB(_scope, show ? "div" : null));
export const _x_ = /* @__PURE__ */_$.value("x", (_scope, x) => _dynamicTagName2(_scope, x), () => _dynamicTagName2);
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTagName(_scope, content), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _content_(_scope, input.content);
  _x_(_scope, input.x);
  _show_(_scope, input.show);
  _showTagA_(_scope, input.showTagA);
  _isLarge_(_scope, input.isLarge);
  _tag_(_scope, input.tag);
  _level_(_scope, input.level);
  _other_(_scope, input.other);
}, () => _$.intersections([_content_, _x_, _showTagA_, _isLarge_, _tag_, _other_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _tag(_scope["#childScope/6"]);
  _tag(_scope["#childScope/7"]);
  _tag_input_class(_scope["#childScope/6"], ["a", "b"]);
  _tag_input_content(_scope["#childScope/6"], void 0);
  _tag_input_content(_scope["#childScope/7"], _showTagATagA_content(_scope));
  _tag_input_class(_scope["#childScope/7"], ["a", "b"]);
  _tagConstA(_scope, "a");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);