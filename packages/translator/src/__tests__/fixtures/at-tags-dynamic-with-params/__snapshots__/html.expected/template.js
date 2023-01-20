import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = ({
  x
}, _tagVar) => {
  const _scope = _nextScopeId();
  let _item;
  const _scope = _nextScopeId();
  if (x) {
    const _scope = _nextScopeId();
    _item = {
      renderBody(y) {
        _write(`${_escapeXML(y)}${_markHydrateNode(_scope, "#text/0")}`);
      }
    };
  }
  _hello({
    item: _item
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);