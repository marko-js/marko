import { write as _write, attr as _attr, escapeXML as _escapeXML, markResumeNode as _markResumeNode, peekNextScope as _peekNextScope, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _comments from "./comments.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<ul>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i = 0;
  for (const comment of input.comments) {
    const _scope1_id = _nextScopeId();
    let i = _i++;
    const id = `${input.path || "c"}-${i}`;
    const open = true;
    _write(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escapeXML(comment.text)}${_markResumeNode(_scope1_id, "#text/1")}</span><button>${_escapeXML(open ? "[-]" : "[+]")}${_markResumeNode(_scope1_id, "#text/3")}</button>${_markResumeNode(_scope1_id, "#button/2")}`);
    let _ifScopeId, _ifRenderer;
    if (comment.comments) {
      const _scope2_id = _nextScopeId();
      const _childScope = _peekNextScope();
      _comments._({
        comments: comment.comments,
        path: id
      });
      _writeScope(_scope2_id, {
        "#childScope/0": _childScope,
        "_": _ensureScopeWithId(_scope1_id)
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", _scope1_id);
      _ifScopeId = _scope2_id;
    }
    _forScopeIds.push(_scope1_id);
    _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/4", _ifScopeId)}</li>${_markResumeNode(_scope1_id, "#li/0")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open");
    _writeScope(_scope1_id, {
      "comment": comment,
      "id": id,
      "open": open,
      "#text/4(": _ifRenderer,
      "#text/4!": _getScopeById(_ifScopeId),
      "_": _ensureScopeWithId(_scope0_id)
    });
    _scope1_.set(i, _getScopeById(_scope1_id));
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#ul/0", _forScopeIds)}</ul>${_markResumeNode(_scope0_id, "#ul/0")}`);
  _writeScope(_scope0_id, {
    "input": input,
    "#ul/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");