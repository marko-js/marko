import { write as _write, attr as _attr, escapeXML as _escapeXML, markResumeNode as _markResumeNode, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, markResumeScopeStart as _markResumeScopeStart, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, maybeFlush as _maybeFlush, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _comments from "./comments.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<ul>");
  const _scope1_ = new Map();
  let _i = 0;
  for (const comment of input.comments) {
    const _scope1_id = _nextScopeId();
    let i = _i++;
    const id = `${input.path || "c"}-${i}`;
    const open = true;
    _write(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escapeXML(comment.text)}${_markResumeNode(_scope1_id, "#text/1")}</span><button>${_escapeXML(open ? "[-]" : "[+]")}${_markResumeNode(_scope1_id, "#text/3")}</button>${_markResumeNode(_scope1_id, "#button/2")}`);
    let _ifScopeId, _scope2_, _ifRenderer;
    if (comment.comments) {
      const _scope2_id = _nextScopeId();
      _comments._({
        comments: comment.comments,
        path: id
      });
      _writeScope(_scope2_id, _scope2_ = {
        "_": _serializedScope(_scope1_id)
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _write(`${_markResumeScopeStart(_scope1_id)}${_markResumeControlSingleNodeEnd(_scope1_id, "#text/4", _ifScopeId)}</li>${_markResumeNode(_scope1_id, "#li/0")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");
    _writeScope(_scope1_id, (_s => (_scope1_.set(i, _s), _s))({
      "i": i,
      "open": open,
      "comment": comment,
      "id": id,
      "#text/4!": _scope2_,
      "#text/4(": _ifRenderer,
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#ul/0")}</ul>${_markResumeNode(_scope0_id, "#ul/0")}`);
  _writeScope(_scope0_id, {
    "#ul/0(": _scope1_.size ? _scope1_ : undefined,
    "input": input
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");