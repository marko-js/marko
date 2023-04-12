import { write as _write, attr as _attr, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, SYMBOL_OWNER as _SYMBOL_OWNER, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, markHydrateScopeStart as _markHydrateScopeStart, markHydrateControlEnd as _markHydrateControlEnd, writeHydrateCall as _writeHydrateCall, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./comments.marko";
const _renderer = _register(({
  comments,
  path = "c"
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<ul>");
  const _scope1_ = new Map();
  let _i = 0;
  for (const comment of comments) {
    const _scope1_id = _nextScopeId();
    let i = _i++;
    const id = `${path}-${i}`;
    const open = true;
    _write(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escapeXML(comment.text)}${_markHydrateNode(_scope1_id, "#text/1")}</span><button>${_escapeXML(open ? "[-]" : "[+]")}${_markHydrateNode(_scope1_id, "#text/3")}</button>${_markHydrateNode(_scope1_id, "#button/2")}`);
    let _ifScopeId, _scope2_, _ifRenderer;
    if (comment.comments) {
      const _scope2_id = _nextScopeId();
      _comments({
        comments: comment.comments,
        path: id,
        renderBody() {
          const _scope3_id = _nextScopeId();
        }
      });
      _writeHydrateScope(_scope2_id, _scope2_ = {
        "comment": comment,
        "id": id,
        [_SYMBOL_OWNER]: _scope1_id
      });
      _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _write(`${_markHydrateScopeStart(_scope1_id)}${_markHydrateControlSingleNodeEnd(_scope1_id, "#text/4", _ifScopeId)}</li>${_markHydrateNode(_scope1_id, "#li/0")}`);
    _writeHydrateCall(_scope1_id, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");
    _writeHydrateScope(_scope1_id, (_s => (_scope1_.set(i, _s), _s))({
      "path": path,
      "i": i,
      "open": open,
      "#text/4!": _scope2_,
      "#text/4(": _ifRenderer,
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#ul/0")}</ul>${_markHydrateNode(_scope0_id, "#ul/0")}`);
  _writeHydrateScope(_scope0_id, {
    "#ul/0(": _scope1_.size ? _scope1_ : undefined
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);