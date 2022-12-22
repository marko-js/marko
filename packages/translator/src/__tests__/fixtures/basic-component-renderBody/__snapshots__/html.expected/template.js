import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _myButton from "./components/my-button.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const clickCount = 0;
  _myButton({
    onClick: function () {
      clickCount++;
    },
    renderBody() {
      const _scope = _nextScopeId();
      _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(clickCount)}`);
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);