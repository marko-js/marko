import { write as _write, attr as _attr, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, SYMBOL_OWNER as _SYMBOL_OWNER, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, writeHydrateCall as _writeHydrateCall, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./comments.marko";
const _renderer = ({
  comments,
  path = "c"
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write("<ul>");
  let _i = 0;
  for (const comment of comments) {
    let i = _i++;
    const _scope1_ = _nextScopeId();
    const id = `${path}-${i}`;
    const open = true;
    _write(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escapeXML(comment.text)}${_markHydrateNode(_scope1_, "#text/1")}</span><button>${_escapeXML(open ? "[-]" : "[+]")}${_markHydrateNode(_scope1_, "#text/3")}</button>${_markHydrateNode(_scope1_, "#button/2")}`);
    let _ifScopeId;
    const _ifScope = {},
      _ifRenderer = () => {};
    if (comment.comments) {
      const _scope2_ = _nextScopeId();
      _comments({
        comments: comment.comments,
        path: id,
        renderBody() {
          const _scope3_ = _nextScopeId();
        }
      });
      _writeHydrateScope(_scope2_, Object.assign(_ifScope, {
        [_SYMBOL_OWNER]: _scope1_
      }));
      _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer");
      _ifScopeId = _scope2_;
    }
    _write(`${_markHydrateControlSingleNodeEnd(_scope1_, "#text/4", _ifScopeId)}</li>${_markHydrateNode(_scope1_, "#li/0")}`);
    _writeHydrateCall(_scope1_, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");
    _writeHydrateScope(_scope1_, {
      "open": open,
      "#text/4!": _ifScope,
      "#text/4(": _ifRenderer
    });
    _maybeFlush();
  }
  _write(`</ul>${_markHydrateNode(_scope0_, "#ul/0")}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);