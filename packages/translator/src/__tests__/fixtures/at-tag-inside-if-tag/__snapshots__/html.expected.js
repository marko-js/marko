import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag/index.marko";

const _renderer = input => {
  let _thing;

  _write(`${_markHydrateNode(0)}`);

  if (x) _thing = {
    x: 1,

    renderBody() {
      _write("Hello");
    }

  };

  const _scope = _nextScopeId();

  _customTag({
    thing: _thing
  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);