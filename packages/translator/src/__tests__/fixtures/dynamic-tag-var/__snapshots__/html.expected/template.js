import child from "./components/child/index.marko";
import { nextScopeId as _nextScopeId, register as _register, dynamicTag as _dynamicTag, write as _write, markHydrateNode as _markHydrateNode, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  show,
  dynamic
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const data1 = child({
    renderBody() {
      const _scope1_ = _nextScopeId();
    }
  }, _register(() => {}, "packages/translator/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data1", _scope0_));
  const _tagName = show && child;
  function _renderBody() {
    const _scope2_ = _nextScopeId();
  }
  let data2 = void 0;
  if (_tagName) data2 = _tagName();else _renderBody();
  const data3 = _dynamicTag(dynamic, null);
  const _tagName2 = show && "div";
  const el1 = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  if (_tagName2) _write(`<${_tagName2}>`);
  if (_tagName2) _write(`</${_tagName2}>`);
  _write(`${_markHydrateNode(_scope0_, "#undefined/1")}`);
  _writeHydrateScope(_scope0_, {});
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);