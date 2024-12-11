import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    renderBody,
    x,
    show,
    showTagA,
    isLarge,
    tag,
    level,
    other
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, renderBody, {
    class: ["a", "b"],
    other: other
  });
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/0"));
  const _dynamicScope2 = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope2, x, {
    class: ["a", "b"],
    other: other
  });
  const _tagName = show ? "div" : null;
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/1"));
  if (_tagName) _$.write(`<${_tagName} class="a b"${_$.attr("other", other)}>`);
  if (_tagName) _$.write(`</${_tagName}>`);
  const _tagName2 = show && "div";
  _$.write(_$.markResumeNode(_scope0_id, "#showDivNull/2"));
  if (_tagName2) _$.write(`<${_tagName2} class="a b"${_$.attr("other", other)}>`);
  if (_tagName2) _$.write(`</${_tagName2}>`);
  _$.write(_$.markResumeNode(_scope0_id, "#showDiv/3"));
  const _dynamicScope3 = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope3, isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/4"));
  const _dynamicScope4 = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope4, showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other
  });
  const _tagName3 = showTagA && tagA;
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/5"));
  const _childScope = _$.peekNextScope();
  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });
  const _tagName4 = showTagA && tagA;
  const _childScope2 = _$.peekNextScope();
  const _renderBody = _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko_1_renderer", _scope0_id);
  if (_tagName4) _tagName4({
    class: ["a", "b"],
    other: other,
    renderBody: _renderBody
  });else _renderBody();
  const _dynamicScope5 = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope5, tag || tagA, {
    class: ["a", "b"],
    other: other
  });
  const largeHeading = isLarge && "h1";
  const _tagName5 = largeHeading || "h2";
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/8"));
  const _dynamicScope6 = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope6, _tagName5, {
    class: ["a", "b"],
    other: other
  });
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/9")}<${global.x = "a" + "b"} class="a b"${_$.attr("other", other)}></${global.x = "a" + "b"}>${_$.markResumeNode(_scope0_id, "#globalXAB/10")}<${"h" + level} class="a b"${_$.attr("other", other)}></${"h" + level}>${_$.markResumeNode(_scope0_id, "#hLevel/11")}<h${level} class="a b"${_$.attr("other", other)}></h${level}>${_$.markResumeNode(_scope0_id, "#h$Level/12")}<${tagConstA} class="a b"${_$.attr("other", other)}></${tagConstA}>${_$.markResumeNode(_scope0_id, "#tagConstA/13")}`);
  if (tagConstB) _$.write(`<${tagConstB} class="a b"${_$.attr("other", other)}>`);
  if (tagConstB) _$.write(`</${tagConstB}>`);
  _$.write(_$.markResumeNode(_scope0_id, "#tagConstB/14"));
  _$.writeScope(_scope0_id, {
    "other": other,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(renderBody),
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
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko", _renderer);