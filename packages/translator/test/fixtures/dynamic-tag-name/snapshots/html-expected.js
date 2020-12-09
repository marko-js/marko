import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";

_dynamicTag(input, {
  class: ["a", "b"],
  other: input.other
});

_dynamicTag(input.x, {
  class: ["a", "b"],
  other: input.other
});

const _tagName = input.show ? "div" : null;

if (_tagName) _write(`<${_tagName} class="a b"${_attr("other", input.other)}></${_tagName}>`);

const _tagName2 = input.show && "div";

if (_tagName2) _write(`<${_tagName2} class="a b"${_attr("other", input.other)}></${_tagName2}>`);

_write(`<${input.large ? "h1" : "h2"} class="a b"${_attr("other", input.other)}></${input.large ? "h1" : "h2"}>`);

(input.showTagA ? tagA : tagB)({
  class: ["a", "b"],
  other: input.other,
  class: ["a", "b"],
  other: input.other
});

const _tagName3 = input.showTagA && tagA;

if (_tagName3) _tagName3({
  class: ["a", "b"],
  other: input.other
});

const _tagName4 = input.showTagA && tagA;

function _renderBody() {
  _write("Body content");
}

if (_tagName4) _tagName4({
  class: ["a", "b"],
  other: input.other
});else _renderBody();

_dynamicTag(input.tag || tagA, {
  class: ["a", "b"],
  other: input.other
});

$ const largeHeading = input.isLarge && "h1";

const _tagName5 = largeHeading || "h2";

if (_tagName5) _write(`<${_tagName5} class="a b"${_attr("other", input.other)}></${_tagName5}>`);
$ const tagConstA = "a";
$ const tagConstB = input.show ? "div" : null;

_write(`<${global.x = "a" + "b"} class="a b"${_attr("other", input.other)}></${global.x = "a" + "b"}><${"h" + input.level} class="a b"${_attr("other", input.other)}></${"h" + input.level}><h${input.level} class="a b"${_attr("other", input.other)}></h${input.level}><${tagConstA} class="a b"${_attr("other", input.other)}></${tagConstA}>`);

if (tagConstB) _write(`<${tagConstB} class="a b"${_attr("other", input.other)}></${tagConstB}>`);
$ let tagLazyAssign;
$ tagLazyAssign = "a";
if (tagLazyAssign) _write(`<${tagLazyAssign} class="a b"${_attr("other", input.other)}></${tagLazyAssign}>`);
$ tagLazyAssign = input.show ? "div" : null;
if (tagLazyAssign) _write(`<${tagLazyAssign} class="a b"${_attr("other", input.other)}></${tagLazyAssign}>`);
import { dynamicTag as _dynamicTag, attr as _attr, write as _write } from "@marko/runtime-fluurt/src/html";