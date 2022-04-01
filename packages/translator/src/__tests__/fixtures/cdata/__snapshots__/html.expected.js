import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  _write("<div>Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.</div>");

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);