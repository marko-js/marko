import { resolveAfter } from "../../utils/resolve";
import { write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const promise = Promise.resolve("hello");
  _write("<div id=ref>0</div>");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/effect-serialize-promise/template.marko_0_promise");
  _writeScope(_scope0_id, {
    "promise": promise
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/effect-serialize-promise/template.marko");