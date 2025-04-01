import * as _$ from "@marko/runtime-tags/debug/html";
const _content = input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<ul>");
  _$.resumeSingleNodeForOf(input.comments, (comment, i) => {
    const _scope1_id = _$.nextScopeId();
    const id = `${input.path || "c"}-${i}`;
    let open = true;
    _$.write(`<li${_$.attr("id", id)}${_$.attr("hidden", !open)}><span>${_$.escapeXML(comment.text)}${_$.markResumeNode(_scope1_id, "#text/1")}</span><button>${_$.escapeXML(open ? "[-]" : "[+]")}${_$.markResumeNode(_scope1_id, "#text/3")}</button>${_$.markResumeNode(_scope1_id, "#button/2")}`);
    _$.resumeSingleNodeConditional(() => {
      if (comment.comments) {
        const _scope2_id = _$.nextScopeId();
        const _childScope = _$.peekNextScope();
        _content({
          comments: comment.comments,
          path: id
        });
        _$.writeScope(_scope2_id, {
          "#childScope/0": _$.writeExistingScope(_childScope),
          _: _$.ensureScopeWithId(_scope1_id)
        }, "__tests__/tags/comments.marko", "10:8");
        return 0;
      }
    }, _scope1_id, "#text/4", 1);
    _$.write(`</li>${_$.markResumeNode(_scope1_id, "#li/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/tags/comments.marko_1_open");
    _$.writeScope(_scope1_id, {
      comment_comments: comment?.comments,
      i,
      id,
      open,
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/tags/comments.marko", "2:4", {
      comment_comments: ["comment.comments", "2:8"],
      i: "2:17",
      id: "3:12",
      open: "4:10"
    });
  }, 0, _scope0_id, "#ul/0", 1);
  _$.write("</ul>");
  _$.writeScope(_scope0_id, {
    input_path: input.path
  }, "__tests__/tags/comments.marko", 0, {
    input_path: ["input.path"]
  });
};
export default _$.createTemplate("__tests__/tags/comments.marko", _content);