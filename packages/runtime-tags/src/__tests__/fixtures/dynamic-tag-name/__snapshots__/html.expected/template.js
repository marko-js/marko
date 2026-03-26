import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_show__OR__input_other = _._serialize_guard($scope0_reason, /* input.show, input.other */2),
    $sg__input_showTagA__OR__input_other = _._serialize_guard($scope0_reason, /* input.showTagA, input.other */3),
    $sg__input_isLarge__OR__input_other = _._serialize_guard($scope0_reason, /* input.isLarge, input.other */4),
    $sg__input_level__OR__input_other = _._serialize_guard($scope0_reason, /* input.level, input.other */6),
    $sg__input_other = _._serialize_guard($scope0_reason, /* input.other */9),
    $si__input_other = _._serialize_if($scope0_reason, /* input.other */9);
  const $scope0_id = _._scope_id();
  const {
    content,
    x,
    show,
    showTagA,
    isLarge,
    tag,
    level,
    other
  } = input;
  _._dynamic_tag($scope0_id, "#text/0", content, {
    class: ["a", "b"],
    other: other
  }, 0, 0, (_._serialize_guard($scope0_reason, /* input.content, input.other */0)));
  _._dynamic_tag($scope0_id, "#text/1", x, {
    class: ["a", "b"],
    other: other
  }, 0, 0, (_._serialize_guard($scope0_reason, /* input.x, input.other */1)));
  _._dynamic_tag($scope0_id, "#text/2", show ? "div" : null, {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_show__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/3", show && "div", {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_show__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/4", isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_isLarge__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/5", showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_showTagA__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/6", showTagA && tagA, {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_showTagA__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/7", showTagA && tagA, {
    class: ["a", "b"],
    other: other
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("Body content");
  }, $scope0_id), 0, $sg__input_showTagA__OR__input_other);
  _._dynamic_tag($scope0_id, "#text/8", tag || tagA, {
    class: ["a", "b"],
    other: other
  }, 0, 0, (_._serialize_guard($scope0_reason, /* input.tag, input.other */5)));
  const largeHeading = isLarge && "h1";
  _._dynamic_tag($scope0_id, "#text/9", largeHeading || "h2", {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_isLarge__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/10", global.x = "a" + "b", {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_other));
  _._dynamic_tag($scope0_id, "#text/11", "h" + level, {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_level__OR__input_other));
  _._dynamic_tag($scope0_id, "#text/12", `h${level}`, {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_level__OR__input_other));
  const tagConstA = "a";
  _._dynamic_tag($scope0_id, "#text/13", tagConstA, {
    class: ["a", "b"],
    other: other
  }, 0, 0, ($sg__input_other));
  const tagConstB = show ? "div" : null;
  _._dynamic_tag($scope0_id, "#text/14", tagConstB, {
    class: ["a", "b"],
    other: other
  }, 0, 0, $sg__input_show__OR__input_other);
  _._dynamic_tag($scope0_id, "#text/15", `h${1}`, {}, 0, 0, 0);
  _._dynamic_tag($scope0_id, "#text/16", foo || 'div', {}, 0, 0, 0);
  _._dynamic_tag($scope0_id, "#text/17", foo + 'div', {}, 0, 0, 0);
  _._dynamic_tag($scope0_id, "#text/18", "d" + "iv", {}, 0, 0, 0);
  (_._serialize_if($scope0_reason, /* input.content, input.x, input.show, input.showTagA, input.isLarge, input.tag, input.level, input.other */8)) && _._scope($scope0_id, {
    content: ($si__input_other) && content,
    x: ($si__input_other) && x,
    show: $si__input_other && show,
    showTagA: $si__input_other && showTagA,
    isLarge: $si__input_other && isLarge,
    tag: $si__input_other && tag,
    level: $si__input_other && level,
    other: (_._serialize_if($scope0_reason, /* input.content, input.x, input.show, input.showTagA, input.isLarge, input.tag, input.level */7)) && other,
    largeHeading: $si__input_other && largeHeading,
    tagConstA: $si__input_other && tagConstA,
    tagConstB: $si__input_other && tagConstB
  }, "__tests__/template.marko", 0, {
    content: "5:10",
    x: "5:19",
    show: "5:22",
    showTagA: "5:28",
    isLarge: "5:38",
    tag: "5:47",
    level: "5:52",
    other: "5:59",
    largeHeading: "23:8",
    tagConstA: "30:8",
    tagConstB: "33:8"
  });
}, 1);