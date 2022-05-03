import { markHydrateNode as _markHydrateNode, write as _write, attr as _attr, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./comments.marko";

const _renderer = ({
  comments,
  path = "c"
}) => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}<ul>`);

  let _i = 0;

  for (const comment of comments) {
    let i = _i++;

    const _scope = _nextScopeId();

    const id = `${path}-${i}`;
    const open = true;

    _write(`${_markHydrateNode(_scope, 0)}<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_markHydrateNode(_scope, 1)}${_escapeXML(comment.text)}</span>${_markHydrateNode(_scope, 2)}<button>${_markHydrateNode(_scope, 3)}${_escapeXML(open ? "[-]" : "[+]")}</button>${_markHydrateNode(_scope, 4)}`);

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

    _write("</li>");

    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");

    _writeHydrateScope(_scope, [,,,,,,,,,,, open]);

    _maybeFlush();
  }

  _write("</ul>");
};

export default _renderer;
export const render = _createRenderer(_renderer);