import { write as _write, attr as _attr, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, SYMBOL_OWNER as _SYMBOL_OWNER, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, markHydrateScopeStart as _markHydrateScopeStart, writeHydrateCall as _writeHydrateCall, maybeFlush as _maybeFlush, markHydrateControlEnd as _markHydrateControlEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./comments.marko";
const _renderer = _register(({
  comments,
  path = "c"
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<ul>");
  const _scope1_ = [];
  let _i = 0;
  for (const comment of comments) {
    let i = _i++;
    const _scope1_id = _nextScopeId();
    const id = `${path}-${i}`;
    const open = true;
    _write(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escapeXML(comment.text)}${_markHydrateNode(_scope1_id, "#text/1")}</span><button>${_escapeXML(open ? "[-]" : "[+]")}${_markHydrateNode(_scope1_id, "#text/3")}</button>${_markHydrateNode(_scope1_id, "#button/2")}`);
    let _ifScopeId;
    const _scope2_ = {},
      _ifRenderer = () => {};
    if (comment.comments) {
      const _scope2_id = _nextScopeId();
      _comments({
        comments: comment.comments,
        path: id,
        renderBody() {
          const _scope3_id = _nextScopeId();
        }
      });
      _writeHydrateScope(_scope2_id, {
        "comment": comment,
        "id": id,
        [_SYMBOL_OWNER]: _scope1_id
      }, _scope2_);
      _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _write(`${_markHydrateScopeStart(_scope1_id)}${_markHydrateControlSingleNodeEnd(_scope1_id, "#text/4", _ifScopeId)}</li>${_markHydrateNode(_scope1_id, "#li/0")}`);
    _writeHydrateCall(_scope1_id, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");
    _writeHydrateScope(_scope1_id, {
      "path": path,
      "i": i,
      "open": open,
      "#text/4!": _scope2_,
      "#text/4(": _ifRenderer,
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#ul/0")}</ul>${_markHydrateNode(_scope0_id, "#ul/0")}`);
}, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);