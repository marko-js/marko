import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  _write("<?xml version=\"1.0\" encoding=\"utf-8\"?><contact-info><name>Hello World</name></contact-info>");

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);