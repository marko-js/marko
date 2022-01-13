import child from "./components/child/index.marko";
import { markScopeOffset as _markScopeOffset, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-var/template.marko", input => {
  const data1 = child();

  const _tagName = show && child;

  let data2 = void 0;
  if (_tagName) data2 = _tagName();
  <${dynamic}/data3/>

  const _tagName2 = show && "div";

  const el1 = void 0;
  if (_tagName2) _write(`${_markScopeOffset(0)}<${_tagName2}></${_tagName2}>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);