import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = input => {
  let _item;

  _write(`${_markHydrateNode(0)}`);

  if (x) _item = {
    renderBody(y) {
      _write(`${_markHydrateNode(0)}${_escapeXML(y)}`);
    }

  };

  const _scope = _nextScopeId();

  _hello({
    item: _item
  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);