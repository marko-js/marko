import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const MyTag = input => _write(`Hello ${_markHydrateNode(_scope, 0)}${_escapeXML(input.name)}`);

  MyTag({
    name: "World",

    renderBody() {
      const _scope = _nextScopeId();
    }

  });
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);