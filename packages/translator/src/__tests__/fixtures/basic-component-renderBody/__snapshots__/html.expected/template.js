import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
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
      _write(`${_escapeXML(clickCount)}${_markHydrateNode(_scope, "#text/0")}`);
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);