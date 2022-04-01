import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { markHydrateNode as _markHydrateNode, attr as _attr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  <${renderBody} class=["a", "b"] other=other/>
  <${x} class=["a", "b"] other=other/>

  const _tagName = show ? "div" : null;

  if (_tagName) _write(`${_markHydrateNode(0)}<${_tagName} class="a b"${_attr("other", other)}></${_tagName}>`);

  const _tagName2 = show && "div";

  if (_tagName2) _write(`${_markHydrateNode(1)}<${_tagName2} class="a b"${_attr("other", other)}></${_tagName2}>`);

  _write(`${_markHydrateNode(2)}<${large ? "h1" : "h2"} class="a b"${_attr("other", other)}></${large ? "h1" : "h2"}>`);

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

  function _renderBody() {
    const _scope = _nextScopeId();
  }

  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });else _renderBody();

  const _tagName4 = showTagA && tagA;

  function _renderBody2() {
    _write("Body content");

    const _scope = _nextScopeId();
  }

  if (_tagName4) _tagName4({
    class: ["a", "b"],
    other: other
  });else _renderBody2();
  (tag || tagA)({
    class: ["a", "b"],
    other: other,

    renderBody() {
      const _scope = _nextScopeId();
    }

  });
  const largeHeading = isLarge && "h1";

  const _tagName5 = largeHeading || "h2";

  if (_tagName5) _write(`${_markHydrateNode(3)}<${_tagName5} class="a b"${_attr("other", other)}></${_tagName5}>`);
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;

  _write(`${_markHydrateNode(4)}<${global.x = "a" + "b"} class="a b"${_attr("other", other)}></${global.x = "a" + "b"}>${_markHydrateNode(5)}<${"h" + level} class="a b"${_attr("other", other)}></${"h" + level}>${_markHydrateNode(6)}<h${level} class="a b"${_attr("other", other)}></h${level}>${_markHydrateNode(7)}<${tagConstA} class="a b"${_attr("other", other)}></${tagConstA}>`);

  if (tagConstB) _write(`${_markHydrateNode(8)}<${tagConstB} class="a b"${_attr("other", other)}></${tagConstB}>`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);