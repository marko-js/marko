import { write as _write, attr as _attr, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./comments.marko";
const _renderer = ({
  comments,
  path = "c"
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<ul>");
  let _i = 0;
  for (const comment of comments) {
    let i = _i++;
    const _scope = _nextScopeId();
    const id = `${path}-${i}`;
    const open = true;
    _write(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escapeXML(comment.text)}${_markHydrateNode(_scope, 1)}</span><button>${_escapeXML(open ? "[-]" : "[+]")}${_markHydrateNode(_scope, 3)}</button>${_markHydrateNode(_scope, 2)}`);
    if (comment.comments) {
      const _scope = _nextScopeId();
      _comments({
        comments: comment.comments,
        path: id,
        renderBody() {
          const _scope = _nextScopeId();
        }
      });
    }
    _write(`</li>${_markHydrateNode(_scope, 0)}`);
    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");
    _writeHydrateScope(_scope, {
      8: open
    });
    _maybeFlush();
  }
  _write(`</ul>${_markHydrateNode(_scope, 0)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);