import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
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
  _$.dynamicTag($scope0_id, "#text/0", content, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* content,other */0));
  _$.dynamicTag($scope0_id, "#text/1", x, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* x,other */1));
  _$.dynamicTag($scope0_id, "#text/2", show ? "div" : null, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* show,other */2));
  _$.dynamicTag($scope0_id, "#text/3", show && "div", {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* show,other */2));
  _$.dynamicTag($scope0_id, "#text/4", isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* isLarge,other */4));
  _$.dynamicTag($scope0_id, "#text/5", showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* showTagA,other */3));
  _$.dynamicTag($scope0_id, "#text/6", showTagA && tagA, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* showTagA,other */3));
  _$.dynamicTag($scope0_id, "#text/7", showTagA && tagA, {
    class: ["a", "b"],
    other: other
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }, $scope0_id), 0, _$.serializeGuard($serialize, /* showTagA,other */3));
  _$.dynamicTag($scope0_id, "#text/8", tag || tagA, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* tag,other */5));
  const largeHeading = isLarge && "h1";
  _$.dynamicTag($scope0_id, "#text/9", largeHeading || "h2", {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* isLarge,other */4));
  _$.dynamicTag($scope0_id, "#text/10", global.x = "a" + "b", {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* other */9));
  _$.dynamicTag($scope0_id, "#text/11", "h" + level, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* level,other */6));
  _$.dynamicTag($scope0_id, "#text/12", `h${level}`, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* level,other */6));
  const tagConstA = "a";
  _$.dynamicTag($scope0_id, "#text/13", tagConstA, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* other */9));
  const tagConstB = show ? "div" : null;
  _$.dynamicTag($scope0_id, "#text/14", tagConstB, {
    class: ["a", "b"],
    other: other
  }, 0, 0, _$.serializeGuard($serialize, /* show,other */2));
  _$.dynamicTag($scope0_id, "#text/15", `h${1}`, {}, 0, 0, 0);
  _$.dynamicTag($scope0_id, "#text/16", foo || 'div', {}, 0, 0, 0);
  _$.dynamicTag($scope0_id, "#text/17", foo + 'div', {}, 0, 0, 0);
  _$.dynamicTag($scope0_id, "#text/18", "d" + "iv", {}, 0, 0, 0);
  _$.serializeGuard($serialize, /* content,x,show,showTagA,isLarge,tag,level,other */8) && _$.writeScope($scope0_id, {
    content: _$.serializeIf($serialize, /* input.other */9) && content,
    x: _$.serializeIf($serialize, /* input.other */9) && x,
    show: _$.serializeIf($serialize, /* input.other */9) && show,
    showTagA: _$.serializeIf($serialize, /* input.other */9) && showTagA,
    isLarge: _$.serializeIf($serialize, /* input.other */9) && isLarge,
    tag: _$.serializeIf($serialize, /* input.other */9) && tag,
    level: _$.serializeIf($serialize, /* input.other */9) && level,
    other: _$.serializeIf($serialize, /* input.content, input.x, input.show, input.showTagA, input.isLarge, input.tag, input.level */7) && other,
    largeHeading: _$.serializeIf($serialize, /* input.other */9) && largeHeading,
    tagConstA: _$.serializeIf($serialize, /* input.other */9) && tagConstA,
    tagConstB: _$.serializeIf($serialize, /* input.other */9) && tagConstB
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
});