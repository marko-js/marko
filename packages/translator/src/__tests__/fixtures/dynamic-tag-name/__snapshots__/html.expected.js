import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { markHydrateNode as _markHydrateNode, write as _write, dynamicTag as _dynamicTag, attr as _attr, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = ({
  renderBody,
  x,
  show,
  showTagA,
  isLarge,
  tag,
  level,
  other
}) => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}`);

  _dynamicTag(renderBody, {
    class: ["a", "b"],
    other: other
  });

  _write(`${_markHydrateNode(_scope, 6)}`);

  _dynamicTag(x, {
    class: ["a", "b"],
    other: other
  });

  const _tagName = show ? "div" : null;

  if (_tagName) _write(`${_markHydrateNode(_scope, 12)}<${_tagName} class="a b"${_attr("other", other)}></${_tagName}>`);

  const _tagName2 = show && "div";

  if (_tagName2) _write(`${_markHydrateNode(_scope, 13)}<${_tagName2} class="a b"${_attr("other", other)}></${_tagName2}>`);

  _write(`${_markHydrateNode(_scope, 14)}<${large ? "h1" : "h2"} class="a b"${_attr("other", other)}></${large ? "h1" : "h2"}>`);

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

  if (_tagName5) _write(`${_markHydrateNode(_scope, 15)}<${_tagName5} class="a b"${_attr("other", other)}></${_tagName5}>`);
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;

  _write(`${_markHydrateNode(_scope, 16)}<${global.x = "a" + "b"} class="a b"${_attr("other", other)}></${global.x = "a" + "b"}>${_markHydrateNode(_scope, 17)}<${"h" + level} class="a b"${_attr("other", other)}></${"h" + level}>${_markHydrateNode(_scope, 18)}<h${level} class="a b"${_attr("other", other)}></h${level}>${_markHydrateNode(_scope, 19)}<${tagConstA} class="a b"${_attr("other", other)}></${tagConstA}>`);

  if (tagConstB) _write(`${_markHydrateNode(_scope, 20)}<${tagConstB} class="a b"${_attr("other", other)}></${tagConstB}>`);
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);