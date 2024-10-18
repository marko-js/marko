import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, write as _write, attr as _attr, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
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
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, renderBody, {
    class: ["a", "b"],
    other: other
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  const _dynamicScope2 = _peekNextScope();
  _dynamicTagInput(_dynamicScope2, x, {
    class: ["a", "b"],
    other: other
  });
  const _tagName = show ? "div" : null;
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}`);
  if (_tagName) _write(`<${_tagName} class="a b"${_attr("other", other)}>`);
  if (_tagName) _write(`</${_tagName}>`);
  const _tagName2 = show && "div";
  _write(`${_markResumeNode(_scope0_id, "#showDivNull/2")}`);
  if (_tagName2) _write(`<${_tagName2} class="a b"${_attr("other", other)}>`);
  if (_tagName2) _write(`</${_tagName2}>`);
  _write(`${_markResumeNode(_scope0_id, "#showDiv/3")}`);
  const _dynamicScope3 = _peekNextScope();
  _dynamicTagInput(_dynamicScope3, isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/4")}`);
  const _dynamicScope4 = _peekNextScope();
  _dynamicTagInput(_dynamicScope4, showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other
  });
  const _tagName3 = showTagA && tagA;
  _write(`${_markResumeControlEnd(_scope0_id, "#text/5")}`);
  const _childScope = _peekNextScope();
  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });
  const _tagName4 = showTagA && tagA;
  const _childScope2 = _peekNextScope();
  const _renderBody = _register(/* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Body content");
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko_1_renderer");
  if (_tagName4) _tagName4({
    class: ["a", "b"],
    other: other
  });else _renderBody();
  const _dynamicScope5 = _peekNextScope();
  _dynamicTagInput(_dynamicScope5, tag || tagA, {
    class: ["a", "b"],
    other: other
  });
  const largeHeading = isLarge && "h1";
  const _tagName5 = largeHeading || "h2";
  _write(`${_markResumeControlEnd(_scope0_id, "#text/8")}`);
  const _dynamicScope6 = _peekNextScope();
  _dynamicTagInput(_dynamicScope6, _tagName5, {
    class: ["a", "b"],
    other: other
  });
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;
  _write(`${_markResumeControlEnd(_scope0_id, "#text/9")}<${global.x = "a" + "b"} class="a b"${_attr("other", other)}></${global.x = "a" + "b"}>${_markResumeNode(_scope0_id, "#globalXAB/10")}<${"h" + level} class="a b"${_attr("other", other)}></${"h" + level}>${_markResumeNode(_scope0_id, "#hLevel/11")}<h${level} class="a b"${_attr("other", other)}></h${level}>${_markResumeNode(_scope0_id, "#h$Level/12")}<${tagConstA} class="a b"${_attr("other", other)}></${tagConstA}>${_markResumeNode(_scope0_id, "#tagConstA/13")}`);
  if (tagConstB) _write(`<${tagConstB} class="a b"${_attr("other", other)}>`);
  if (tagConstB) _write(`</${tagConstB}>`);
  _write(`${_markResumeNode(_scope0_id, "#tagConstB/14")}`);
  _writeScope(_scope0_id, {
    "other": other,
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(renderBody),
    "#text/1!": _writeExistingScope(_dynamicScope2),
    "#text/1(": _normalizeDynamicRenderer(x),
    "#text/4!": _writeExistingScope(_dynamicScope3),
    "#text/4(": _normalizeDynamicRenderer(isLarge ? "h1" : "h2"),
    "#text/5!": _writeExistingScope(_dynamicScope4),
    "#text/5(": _normalizeDynamicRenderer(showTagA ? tagA : tagB),
    "#childScope/6": _writeExistingScope(_childScope),
    "#childScope/7": _writeExistingScope(_childScope2),
    "#text/8!": _writeExistingScope(_dynamicScope5),
    "#text/8(": _normalizeDynamicRenderer(tag || tagA),
    "#text/9!": _writeExistingScope(_dynamicScope6),
    "#text/9(": _normalizeDynamicRenderer(_tagName5)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko");