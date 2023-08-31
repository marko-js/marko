import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, write as _write, attr as _attr, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  renderBody,
  x,
  show,
  showTagA,
  isLarge,
  tag,
  level,
  other
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _dynamicScope = _dynamicTag(renderBody, {
    class: ["a", "b"],
    other: other
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  const _dynamicScope2 = _dynamicTag(x, {
    class: ["a", "b"],
    other: other
  });
  const _tagName = show ? "div" : null;
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}`);
  if (_tagName) _write(`<${_tagName} class="a b"${_attr("other", other)}>`);
  if (_tagName) _write(`</${_tagName}>`);
  const _tagName2 = show && "div";
  _write(`${_markResumeNode(_scope0_id, "#undefined/2")}`);
  if (_tagName2) _write(`<${_tagName2} class="a b"${_attr("other", other)}>`);
  if (_tagName2) _write(`</${_tagName2}>`);
  _write(`${_markResumeNode(_scope0_id, "#undefined/3")}`);
  const _dynamicScope3 = _dynamicTag(large ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/4")}`);
  (showTagA ? tagA : tagB)({
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other,
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  });
  const _tagName3 = showTagA && tagA;
  function _renderBody2() {
    const _scope3_id = _nextScopeId();
  }
  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });else _renderBody2();
  const _tagName4 = showTagA && tagA;
  function _renderBody3() {
    const _scope1_id = _nextScopeId();
    _write("Body content");
  }
  if (_tagName4) _tagName4({
    class: ["a", "b"],
    other: other
  });else _renderBody3();
  (tag || tagA)({
    class: ["a", "b"],
    other: other,
    renderBody() {
      const _scope4_id = _nextScopeId();
    }
  });
  const largeHeading = isLarge && "h1";
  const _tagName5 = largeHeading || "h2";
  const _dynamicScope4 = _dynamicTag(_tagName5, {
    class: ["a", "b"],
    other: other
  });
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;
  _write(`${_markResumeControlEnd(_scope0_id, "#text/5")}<${global.x = "a" + "b"} class="a b"${_attr("other", other)}></${global.x = "a" + "b"}>${_markResumeNode(_scope0_id, "#undefined/6")}<${"h" + level} class="a b"${_attr("other", other)}></${"h" + level}>${_markResumeNode(_scope0_id, "#undefined/7")}<h${level} class="a b"${_attr("other", other)}></h${level}>${_markResumeNode(_scope0_id, "#undefined/8")}<${tagConstA} class="a b"${_attr("other", other)}></${tagConstA}>${_markResumeNode(_scope0_id, "#undefined/9")}`);
  if (tagConstB) _write(`<${tagConstB} class="a b"${_attr("other", other)}>`);
  if (tagConstB) _write(`</${tagConstB}>`);
  _write(`${_markResumeNode(_scope0_id, "#undefined/10")}`);
  _writeScope(_scope0_id, {
    "other": other,
    "#text/0!": _dynamicScope,
    "#text/0(": renderBody,
    "#text/1!": _dynamicScope2,
    "#text/1(": x,
    "#text/4!": _dynamicScope3,
    "#text/4(": large ? "h1" : "h2",
    "#text/5!": _dynamicScope4,
    "#text/5(": _tagName5
  }, _scope0_);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/dynamic-tag-name/template.marko");