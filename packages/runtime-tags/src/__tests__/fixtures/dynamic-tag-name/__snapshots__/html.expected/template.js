import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
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
  const _tagName = show ? "div" : null;
  if (_tagName) _$.write(`<${_tagName} class="a b"${_$.attr("other", other)}>`);
  if (_tagName) _$.write(`</${_tagName}>`);
  const _tagName2 = show && "div";
  _$.write(_$.markResumeNode(_scope0_id, "#showDivNull/2"));
  if (_tagName2) _$.write(`<${_tagName2} class="a b"${_$.attr("other", other)}>`);
  if (_tagName2) _$.write(`</${_tagName2}>`);
  _$.write(_$.markResumeNode(_scope0_id, "#showDiv/3"));
  const _dynamicScope3 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/4", isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });
  const _dynamicScope4 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/5", showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other
  });
  const _tagName3 = showTagA && tagA;
  const _childScope = _$.peekNextScope();
  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });
  const _tagName4 = showTagA && tagA;
  const _childScope2 = _$.peekNextScope();
  const _content = _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }), "__tests__/template.marko_1_renderer", _scope0_id);
  if (_tagName4) _tagName4({
    class: ["a", "b"],
    other: other,
    content: _content
  });else _content();
  const _dynamicScope5 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/8", tag || tagA, {
    class: ["a", "b"],
    other: other
  });
  const largeHeading = isLarge && "h1";
  const _tagName5 = largeHeading || "h2";
  const _dynamicScope6 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/9", _tagName5, {
    class: ["a", "b"],
    other: other
  });
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;
  _$.write(`<${global.x = "a" + "b"} class="a b"${_$.attr("other", other)}></${global.x = "a" + "b"}>${_$.markResumeNode(_scope0_id, "#globalXAB/10")}<${"h" + level} class="a b"${_$.attr("other", other)}></${"h" + level}>${_$.markResumeNode(_scope0_id, "#hLevel/11")}<h${level} class="a b"${_$.attr("other", other)}></h${level}>${_$.markResumeNode(_scope0_id, "#h$Level/12")}<${tagConstA} class="a b"${_$.attr("other", other)}></${tagConstA}>${_$.markResumeNode(_scope0_id, "#tagConstA/13")}`);
  if (tagConstB) _$.write(`<${tagConstB} class="a b"${_$.attr("other", other)}>`);
  if (tagConstB) _$.write(`</${tagConstB}>`);
  _$.write(_$.markResumeNode(_scope0_id, "#tagConstB/14"));
  _$.debug(_$.writeScope(_scope0_id, {
    "other": other,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(content),
    "#text/1!": _$.writeExistingScope(_dynamicScope2),
    "#text/1(": _$.normalizeDynamicRenderer(x),
    "#text/4!": _$.writeExistingScope(_dynamicScope3),
    "#text/4(": _$.normalizeDynamicRenderer(isLarge ? "h1" : "h2"),
    "#text/5!": _$.writeExistingScope(_dynamicScope4),
    "#text/5(": _$.normalizeDynamicRenderer(showTagA ? tagA : tagB),
    "#childScope/6": _$.writeExistingScope(_childScope),
    "#childScope/7": _$.writeExistingScope(_childScope2),
    "#text/8!": _$.writeExistingScope(_dynamicScope5),
    "#text/8(": _$.normalizeDynamicRenderer(tag || tagA),
    "#text/9!": _$.writeExistingScope(_dynamicScope6),
    "#text/9(": _$.normalizeDynamicRenderer(_tagName5)
  }), "__tests__/template.marko", 0, {
    "content": "4:10",
    "x": "4:19",
    "show": "4:22",
    "showTagA": "4:28",
    "isLarge": "4:38",
    "tag": "4:47",
    "level": "4:52",
    "other": "4:59",
    "largeHeading": "22:8",
    "tagConstA": "29:8",
    "tagConstB": "32:8"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);