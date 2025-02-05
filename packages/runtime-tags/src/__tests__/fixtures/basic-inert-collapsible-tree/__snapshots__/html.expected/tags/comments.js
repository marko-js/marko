import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<ul>");
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(input.comments, (comment, i) => {
    const _scope1_id = _$.nextScopeId();
    const id = `${input.path || "c"}-${i}`;
    const open = true;
    _$.write(`<li${_$.attr("id", id)}${_$.attr("hidden", !open)}><span>${_$.escapeXML(comment.text)}${_$.markResumeNode(_scope1_id, "#text/1")}</span><button>${_$.escapeXML(open ? "[-]" : "[+]")}${_$.markResumeNode(_scope1_id, "#text/3")}</button>${_$.markResumeNode(_scope1_id, "#button/2")}`);
    let _ifScopeId, _ifRenderer;
    _$.resumeSingleNodeConditional(() => {
      if (comment.comments) {
        const _scope2_id = _$.nextScopeId();
        const _childScope = _$.peekNextScope();
        _renderer({
          comments: comment.comments,
          path: id
        });
        _$.debug(_$.writeScope(_scope2_id, {
          "#childScope/0": _$.writeExistingScope(_childScope),
          "_": _$.ensureScopeWithId(_scope1_id)
        }), "__tests__/tags/comments.marko", "10:8");
        _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/tags/comments.marko_2_renderer");
        _ifScopeId = _scope2_id;
      }
    }, _scope1_id, "#text/4");
    _scope1_.set(i, _$.ensureScopeWithId(_scope1_id));
    _$.write(`</li>${_$.markResumeNode(_scope1_id, "#li/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/tags/comments.marko_1_open");
    _$.debug(_$.writeScope(_scope1_id, {
      "comment_comments": comment?.comments,
      "i": i,
      "id": id,
      "open": open,
      "#text/4(": _ifRenderer,
      "#text/4!": _$.getScopeById(_ifScopeId),
      "_": _$.ensureScopeWithId(_scope0_id)
    }), "__tests__/tags/comments.marko", "2:4", {
      "comment": "2:8",
      "comment_text": ["comment.text", "2:8"],
      "comment_comments": ["comment.comments", "2:8"],
      "i": "2:17",
      "id": "3:12",
      "open": "4:10"
    });
  }, _scope0_id, "#ul/0");
  _$.write(`</ul>${_$.markResumeNode(_scope0_id, "#ul/0")}`);
  _$.debug(_$.writeScope(_scope0_id, {
    "input_path": input.path,
    "#ul/0(": _scope1_.size ? _scope1_ : undefined
  }), "__tests__/tags/comments.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/comments.marko", _renderer);