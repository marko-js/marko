import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
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
  }, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }), "__tests__/template.marko_1_renderer", _scope0_id));
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
  _$.debug(_$.writeScope(_scope0_id, {
    "other": other,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(content),
    "#text/1!": _$.writeExistingScope(_dynamicScope2),
    "#text/1(": _$.normalizeDynamicRenderer(x),
    "#text/2!": _$.writeExistingScope(_dynamicScope3),
    "#text/2(": _$.normalizeDynamicRenderer(show ? "div" : null),
    "#text/3!": _$.writeExistingScope(_dynamicScope4),
    "#text/3(": _$.normalizeDynamicRenderer(show && "div"),
    "#text/4!": _$.writeExistingScope(_dynamicScope5),
    "#text/4(": _$.normalizeDynamicRenderer(isLarge ? "h1" : "h2"),
    "#text/5!": _$.writeExistingScope(_dynamicScope6),
    "#text/5(": _$.normalizeDynamicRenderer(showTagA ? tagA : tagB),
    "#text/6!": _$.writeExistingScope(_dynamicScope7),
    "#text/6(": _$.normalizeDynamicRenderer(showTagA && tagA),
    "#text/7!": _$.writeExistingScope(_dynamicScope8),
    "#text/7(": _$.normalizeDynamicRenderer(showTagA && tagA),
    "#text/8!": _$.writeExistingScope(_dynamicScope9),
    "#text/8(": _$.normalizeDynamicRenderer(tag || tagA),
    "#text/9!": _$.writeExistingScope(_dynamicScope10),
    "#text/9(": _$.normalizeDynamicRenderer(largeHeading || "h2"),
    "#text/10!": _$.writeExistingScope(_dynamicScope11),
    "#text/10(": _$.normalizeDynamicRenderer(global.x = "a" + "b"),
    "#text/11!": _$.writeExistingScope(_dynamicScope12),
    "#text/11(": _$.normalizeDynamicRenderer("h" + level),
    "#text/12!": _$.writeExistingScope(_dynamicScope13),
    "#text/12(": _$.normalizeDynamicRenderer(`h${level}`),
    "#text/13!": _$.writeExistingScope(_dynamicScope14),
    "#text/13(": _$.normalizeDynamicRenderer(tagConstA),
    "#text/14!": _$.writeExistingScope(_dynamicScope15),
    "#text/14(": _$.normalizeDynamicRenderer(tagConstB),
    "#text/15!": _$.writeExistingScope(_dynamicScope16),
    "#text/15(": _$.normalizeDynamicRenderer(`h${1}`),
    "#text/16!": _$.writeExistingScope(_dynamicScope17),
    "#text/16(": _$.normalizeDynamicRenderer(foo || 'div'),
    "#text/17!": _$.writeExistingScope(_dynamicScope18),
    "#text/17(": _$.normalizeDynamicRenderer(foo + 'div'),
    "#text/18!": _$.writeExistingScope(_dynamicScope19),
    "#text/18(": _$.normalizeDynamicRenderer("d" + "iv")
  }), "__tests__/template.marko", 0, {
    "content": "5:10",
    "x": "5:19",
    "show": "5:22",
    "showTagA": "5:28",
    "isLarge": "5:38",
    "tag": "5:47",
    "level": "5:52",
    "other": "5:59",
    "largeHeading": "23:8",
    "tagConstA": "30:8",
    "tagConstB": "33:8"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);