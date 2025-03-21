import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
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
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", content, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope2 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", x, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope3 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/2", show ? "div" : null, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope4 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/3", show && "div", {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope5 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/4", isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope6 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/5", showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope7 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/6", showTagA && tagA, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope8 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/7", showTagA && tagA, {
    class: ["a", "b"],
    other: other
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }, _scope0_id));
  const _dynamicScope9 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/8", tag || tagA, {
    class: ["a", "b"],
    other: other
  });
  const largeHeading = isLarge && "h1";
  const _dynamicScope10 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/9", largeHeading || "h2", {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope11 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/10", global.x = "a" + "b", {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope12 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/11", "h" + level, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope13 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/12", `h${level}`, {
    class: ["a", "b"],
    other: other
  });
  const tagConstA = "a";
  const _dynamicScope14 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/13", tagConstA, {
    class: ["a", "b"],
    other: other
  });
  const tagConstB = show ? "div" : null;
  const _dynamicScope15 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/14", tagConstB, {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope16 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/15", `h${1}`, {});
  const _dynamicScope17 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/16", foo || 'div', {});
  const _dynamicScope18 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/17", foo + 'div', {});
  const _dynamicScope19 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/18", "d" + "iv", {});
  _$.writeScope(_scope0_id, {
    content,
    x,
    show,
    showTagA,
    isLarge,
    tag,
    level,
    other,
    largeHeading,
    tagConstA,
    tagConstB,
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(content),
    "ConditionalScope:#text/1": _$.writeExistingScope(_dynamicScope2),
    "ConditionalRenderer:#text/1": _$.dynamicTagId(x),
    "ConditionalScope:#text/2": _$.writeExistingScope(_dynamicScope3),
    "ConditionalRenderer:#text/2": _$.dynamicTagId(show ? "div" : null),
    "ConditionalScope:#text/3": _$.writeExistingScope(_dynamicScope4),
    "ConditionalRenderer:#text/3": _$.dynamicTagId(show && "div"),
    "ConditionalScope:#text/4": _$.writeExistingScope(_dynamicScope5),
    "ConditionalRenderer:#text/4": _$.dynamicTagId(isLarge ? "h1" : "h2"),
    "ConditionalScope:#text/5": _$.writeExistingScope(_dynamicScope6),
    "ConditionalRenderer:#text/5": _$.dynamicTagId(showTagA ? tagA : tagB),
    "ConditionalScope:#text/6": _$.writeExistingScope(_dynamicScope7),
    "ConditionalRenderer:#text/6": _$.dynamicTagId(showTagA && tagA),
    "ConditionalScope:#text/7": _$.writeExistingScope(_dynamicScope8),
    "ConditionalRenderer:#text/7": _$.dynamicTagId(showTagA && tagA),
    "ConditionalScope:#text/8": _$.writeExistingScope(_dynamicScope9),
    "ConditionalRenderer:#text/8": _$.dynamicTagId(tag || tagA),
    "ConditionalScope:#text/9": _$.writeExistingScope(_dynamicScope10),
    "ConditionalRenderer:#text/9": _$.dynamicTagId(largeHeading || "h2"),
    "ConditionalScope:#text/10": _$.writeExistingScope(_dynamicScope11),
    "ConditionalRenderer:#text/10": _$.dynamicTagId(global.x = "a" + "b"),
    "ConditionalScope:#text/11": _$.writeExistingScope(_dynamicScope12),
    "ConditionalRenderer:#text/11": _$.dynamicTagId("h" + level),
    "ConditionalScope:#text/12": _$.writeExistingScope(_dynamicScope13),
    "ConditionalRenderer:#text/12": _$.dynamicTagId(`h${level}`),
    "ConditionalScope:#text/13": _$.writeExistingScope(_dynamicScope14),
    "ConditionalRenderer:#text/13": _$.dynamicTagId(tagConstA),
    "ConditionalScope:#text/14": _$.writeExistingScope(_dynamicScope15),
    "ConditionalRenderer:#text/14": _$.dynamicTagId(tagConstB),
    "ConditionalScope:#text/15": _$.writeExistingScope(_dynamicScope16),
    "ConditionalRenderer:#text/15": _$.dynamicTagId(`h${1}`),
    "ConditionalScope:#text/16": _$.writeExistingScope(_dynamicScope17),
    "ConditionalRenderer:#text/16": _$.dynamicTagId(foo || 'div'),
    "ConditionalScope:#text/17": _$.writeExistingScope(_dynamicScope18),
    "ConditionalRenderer:#text/17": _$.dynamicTagId(foo + 'div'),
    "ConditionalScope:#text/18": _$.writeExistingScope(_dynamicScope19),
    "ConditionalRenderer:#text/18": _$.dynamicTagId("d" + "iv")
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