import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, write as _write, attr as _attr, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  renderBody,
  x,
  show,
  showTagA,
  isLarge,
  tag,
  level,
  other
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _dynamicScope = _dynamicTagInput(renderBody, {
    class: ["a", "b"],
    other: other
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  const _dynamicScope2 = _dynamicTagInput(x, {
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
  const _dynamicScope3 = _dynamicTagInput(isLarge ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/4")}`);
  const _dynamicScope4 = _dynamicTagInput(showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other
  });
  const _tagName3 = showTagA && tagA;
  _write(`${_markResumeControlEnd(_scope0_id, "#text/5")}`);
  if (_tagName3._) _tagName3._({
    class: ["a", "b"],
    other: other
  });
  const _tagName4 = showTagA && tagA;
  const _renderBody2 = _register( /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Body content");
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko_1_renderer", _scope0_id);
  if (_tagName4._) _tagName4._({
    class: ["a", "b"],
    other: other
  });else _renderBody2();
  (tag || tagA)._({
    class: ["a", "b"],
    other: other
  });
  const largeHeading = isLarge && "h1";
  const _tagName5 = largeHeading || "h2";
  const _dynamicScope5 = _dynamicTagInput(_tagName5, {
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
    "#text/0!": _dynamicScope,
    "#text/0(": renderBody,
    "#text/1!": _dynamicScope2,
    "#text/1(": x,
    "#text/4!": _dynamicScope3,
    "#text/4(": isLarge ? "h1" : "h2",
    "#text/5!": _dynamicScope4,
    "#text/5(": showTagA ? tagA : tagB,
    "#text/9!": _dynamicScope5,
    "#text/9(": _tagName5
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/template.marko");