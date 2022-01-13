import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { markScopeOffset as _markScopeOffset, attr as _attr, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-name/template.marko", input => {
  <${renderBody} class=["a", "b"] other=other/>
  <${x} class=["a", "b"] other=other/>

  const _tagName = show ? "div" : null;

  if (_tagName) _write(`${_markScopeOffset(0)}<${_tagName} class="a b"${_attr("other", other)}></${_tagName}>`);

  const _tagName2 = show && "div";

  if (_tagName2) _write(`${_markScopeOffset(1)}<${_tagName2} class="a b"${_attr("other", other)}></${_tagName2}>`);

  _write(`${_markScopeOffset(2)}<${large ? "h1" : "h2"} class="a b"${_attr("other", other)}></${large ? "h1" : "h2"}>`);

  (showTagA ? tagA : tagB)({
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other
  });

  const _tagName3 = showTagA && tagA;

  if (_tagName3) _tagName3({
    class: ["a", "b"],
    other: other
  });

  const _tagName4 = showTagA && tagA;

  function _renderBody() {
    _write("Body content");
  }

  if (_tagName4) _tagName4({
    class: ["a", "b"],
    other: other
  });else _renderBody();
  (tag || tagA)({
    class: ["a", "b"],
    other: other
  });
  const largeHeading = isLarge && "h1";

  const _tagName5 = largeHeading || "h2";

  if (_tagName5) _write(`${_markScopeOffset(3)}<${_tagName5} class="a b"${_attr("other", other)}></${_tagName5}>`);
  const tagConstA = "a";
  const tagConstB = show ? "div" : null;

  _write(`${_markScopeOffset(4)}<${global.x = "a" + "b"} class="a b"${_attr("other", other)}></${global.x = "a" + "b"}>${_markScopeOffset(5)}<${"h" + level} class="a b"${_attr("other", other)}></${"h" + level}>${_markScopeOffset(6)}<h${level} class="a b"${_attr("other", other)}></h${level}>${_markScopeOffset(7)}<${tagConstA} class="a b"${_attr("other", other)}></${tagConstA}>`);

  if (tagConstB) _write(`${_markScopeOffset(8)}<${tagConstB} class="a b"${_attr("other", other)}></${tagConstB}>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);