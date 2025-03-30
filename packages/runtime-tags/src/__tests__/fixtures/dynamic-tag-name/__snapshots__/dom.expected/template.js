export const _template_ = "<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1) */"D%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%bD";
import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _$ from "@marko/runtime-tags/debug/dom";
const _showTagATagA_content = _$.registerContent("__tests__/template.marko_1_renderer", "Body content");
const _expr_other_tagConstB = /* @__PURE__ */_$.intersection(41, _scope => {
  const {
    other,
    tagConstB
  } = _scope;
  _dynamicTag15(_scope, tagConstB, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_other_tagConstA = /* @__PURE__ */_$.intersection(39, _scope => {
  const {
    other,
    tagConstA
  } = _scope;
  _dynamicTag14(_scope, tagConstA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_other_largeHeading = /* @__PURE__ */_$.intersection(37, _scope => {
  const {
    other,
    largeHeading
  } = _scope;
  _dynamicTag10(_scope, largeHeading || "h2", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_level_other = /* @__PURE__ */_$.intersection(35, _scope => {
  const {
    level,
    other
  } = _scope;
  _dynamicTag12(_scope, "h" + level, () => ({
    class: ["a", "b"],
    other: other
  }));
  _dynamicTag13(_scope, `h${level}`, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_tag_other = /* @__PURE__ */_$.intersection(34, _scope => {
  const {
    tag,
    other
  } = _scope;
  _dynamicTag9(_scope, tag || tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_isLarge_other = /* @__PURE__ */_$.intersection(33, _scope => {
  const {
    isLarge,
    other
  } = _scope;
  _dynamicTag5(_scope, isLarge ? "h1" : "h2", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_showTagA_other = /* @__PURE__ */_$.intersection(32, _scope => {
  const {
    showTagA,
    other
  } = _scope;
  _dynamicTag6(_scope, showTagA ? tagA : tagB, () => ({
    class: ["a", "b"],
    other: other
  }));
  _dynamicTag7(_scope, showTagA && tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
  _dynamicTag8(_scope, showTagA && tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_show_other = /* @__PURE__ */_$.intersection(31, _scope => {
  const {
    show,
    other
  } = _scope;
  _dynamicTag3(_scope, show ? "div" : null, () => ({
    class: ["a", "b"],
    other: other
  }));
  _dynamicTag4(_scope, show && "div", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_x_other = /* @__PURE__ */_$.intersection(30, _scope => {
  const {
    x,
    other
  } = _scope;
  _dynamicTag2(_scope, x, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _expr_content_other = /* @__PURE__ */_$.intersection(29, _scope => {
  const {
    content,
    other
  } = _scope;
  _dynamicTag(_scope, content, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const _dynamicTag19 = /* @__PURE__ */_$.dynamicTag("#text/18");
const _dynamicTag18 = /* @__PURE__ */_$.dynamicTag("#text/17");
const _dynamicTag17 = /* @__PURE__ */_$.dynamicTag("#text/16");
const _dynamicTag16 = /* @__PURE__ */_$.dynamicTag("#text/15");
const _dynamicTag15 = /* @__PURE__ */_$.dynamicTag("#text/14");
const _dynamicTag14 = /* @__PURE__ */_$.dynamicTag("#text/13");
const _dynamicTag13 = /* @__PURE__ */_$.dynamicTag("#text/12");
const _dynamicTag12 = /* @__PURE__ */_$.dynamicTag("#text/11");
const _dynamicTag11 = /* @__PURE__ */_$.dynamicTag("#text/10");
const _dynamicTag10 = /* @__PURE__ */_$.dynamicTag("#text/9");
const _dynamicTag9 = /* @__PURE__ */_$.dynamicTag("#text/8");
const _dynamicTag8 = /* @__PURE__ */_$.dynamicTag("#text/7", _showTagATagA_content);
const _dynamicTag7 = /* @__PURE__ */_$.dynamicTag("#text/6");
const _dynamicTag6 = /* @__PURE__ */_$.dynamicTag("#text/5");
const _dynamicTag5 = /* @__PURE__ */_$.dynamicTag("#text/4");
const _dynamicTag4 = /* @__PURE__ */_$.dynamicTag("#text/3");
const _dynamicTag3 = /* @__PURE__ */_$.dynamicTag("#text/2");
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/1");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _tagConstB = /* @__PURE__ */_$.value("tagConstB", _scope => _expr_other_tagConstB(_scope));
const _tagConstA = /* @__PURE__ */_$.value("tagConstA", _scope => _expr_other_tagConstA(_scope));
const _largeHeading = /* @__PURE__ */_$.value("largeHeading", _scope => _expr_other_largeHeading(_scope));
export const _other_ = /* @__PURE__ */_$.value("other", (_scope, other) => {
  _dynamicTag11(_scope, global.x = "a" + "b", () => ({
    class: ["a", "b"],
    other: other
  }));
  _expr_content_other(_scope);
  _expr_x_other(_scope);
  _expr_show_other(_scope);
  _expr_isLarge_other(_scope);
  _expr_showTagA_other(_scope);
  _expr_tag_other(_scope);
  _expr_other_largeHeading(_scope);
  _expr_level_other(_scope);
  _expr_other_tagConstA(_scope);
  _expr_other_tagConstB(_scope);
});
export const _level_ = /* @__PURE__ */_$.value("level", _scope => _expr_level_other(_scope));
export const _tag_ = /* @__PURE__ */_$.value("tag", _scope => _expr_tag_other(_scope));
export const _isLarge_ = /* @__PURE__ */_$.value("isLarge", (_scope, isLarge) => {
  _largeHeading(_scope, isLarge && "h1");
  _expr_isLarge_other(_scope);
});
export const _showTagA_ = /* @__PURE__ */_$.value("showTagA", _scope => _expr_showTagA_other(_scope));
export const _show_ = /* @__PURE__ */_$.value("show", (_scope, show) => {
  _tagConstB(_scope, show ? "div" : null);
  _expr_show_other(_scope);
});
export const _x_ = /* @__PURE__ */_$.value("x", _scope => _expr_x_other(_scope));
export const _content_ = /* @__PURE__ */_$.value("content", _scope => _expr_content_other(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _content_(_scope, input.content);
  _x_(_scope, input.x);
  _show_(_scope, input.show);
  _showTagA_(_scope, input.showTagA);
  _isLarge_(_scope, input.isLarge);
  _tag_(_scope, input.tag);
  _level_(_scope, input.level);
  _other_(_scope, input.other);
});
export function _setup_(_scope) {
  _tagConstA(_scope, "a");
  _dynamicTag16(_scope, `h${1}`);
  _dynamicTag17(_scope, foo || 'div');
  _dynamicTag18(_scope, foo + 'div');
  _dynamicTag19(_scope, "d" + "iv");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);