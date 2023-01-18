import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicTag as _dynamicTag, attr as _attr, write as _write, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  renderBody,
  x,
  show,
  showTagA,
  isLarge,
  tag,
  level,
  other
}, _tagVar) => {
  const _scope = _nextScopeId();
  _dynamicTag(renderBody, {
    class: ["a", "b"],
    other: other
  });
  _dynamicTag(x, {
    class: ["a", "b"],
    other: other
  });
  const _tagName = show ? "div" : null;
  if (_tagName) _write(`<${_tagName} class="a b"${_attr("other", other)}>`);
  if (_tagName) _write(`</${_tagName}>`);
  const _tagName2 = show && "div";
  _write(`${_markHydrateNode(_scope, 12)}`);
  if (_tagName2) _write(`<${_tagName2} class="a b"${_attr("other", other)}>`);
  if (_tagName2) _write(`</${_tagName2}>`);
  _write(`${_markHydrateNode(_scope, 13)}<${large ? "h1" : "h2"} class="a b"${_attr("other", other)}></${large ? "h1" : "h2"}>${_markHydrateNode(_scope, 14)}`);
  (showTagA ? tagA : tagB)({
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other,
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  const _tagName3 = showTagA && tagA;
  function _renderBody2() {
    const _scope = _nextScopeId();
  }
  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });else _renderBody2();
  const _tagName4 = showTagA && tagA;
  function _renderBody3() {
    const _scope = _nextScopeId();
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
      const _scope = _nextScopeId();
    }
  });
  const largeHeading = isLarge && "h1";
  const _tagName5 = largeHeading || "h2";
  if (_tagName5) _write(`<${_tagName5} class="a b"${_attr("other", other)}>`);
  if (_tagName5) _write(`</${_tagName5}>`);
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;
  _write(`${_markHydrateNode(_scope, 15)}<${global.x = "a" + "b"} class="a b"${_attr("other", other)}></${global.x = "a" + "b"}>${_markHydrateNode(_scope, 16)}<${"h" + level} class="a b"${_attr("other", other)}></${"h" + level}>${_markHydrateNode(_scope, 17)}<h${level} class="a b"${_attr("other", other)}></h${level}>${_markHydrateNode(_scope, 18)}<${tagConstA} class="a b"${_attr("other", other)}></${tagConstA}>${_markHydrateNode(_scope, 19)}`);
  if (tagConstB) _write(`<${tagConstB} class="a b"${_attr("other", other)}>`);
  if (tagConstB) _write(`</${tagConstB}>`);
  _write(`${_markHydrateNode(_scope, 20)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);