import * as _$ from "@marko/runtime-tags/debug/html";
const $content = (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<ul>");
  _$.resumeSingleNodeForOf(input.comments, (comment, i) => {
    const $scope1_id = _$.nextScopeId();
    const id = `${input.path || "c"}-${i}`;
    let open = true;
    _$.write(`<li${_$.attr("id", id)}${_$.attr("hidden", !open)}><span>${_$.escapeXML(comment.text)}${_$.markResumeNode($scope1_id, "#text/1", _$.serializeGuard($serialize, /* input.comments */1))}</span><button>${_$.escapeXML(open ? "[-]" : "[+]")}${_$.markResumeNode($scope1_id, "#text/3")}</button>${_$.markResumeNode($scope1_id, "#button/2")}`);
    _$.resumeSingleNodeConditional(() => {
      if (comment.comments) {
        const $scope2_id = _$.nextScopeId();
        const $childScope = _$.peekNextScopeId();
        $content({
          comments: comment.comments,
          path: id
        });
        _$.serializeGuard($serialize, /* input.comments,input.path */0) && _$.writeScope($scope2_id, {
          _: _$.ensureScopeWithId($scope1_id),
          "#childScope/0": _$.serializeIf($serialize, /* input.comments, input.path */0) && _$.writeExistingScope($childScope)
        }, "__tests__/tags/comments.marko", "10:8");
        return 0;
      }
    }, $scope1_id, "#text/4", _$.serializeGuard($serialize, /* input.comments,input.path */0), _$.serializeGuard($serialize, /* input.comments */1));
    _$.write(`</li>${_$.markResumeNode($scope1_id, "#li/0")}`);
    _$.writeEffect($scope1_id, "__tests__/tags/comments.marko_1_open");
    _$.writeScope($scope1_id, {
      comment_comments: _$.serializeIf($serialize, /* input.comments, input.path */0) && comment?.comments,
      i: _$.serializeIf($serialize, /* input.path */2) && i,
      id: _$.serializeIf($serialize, /* input.comments */1) && id,
      open,
      _: _$.serializeIf($serialize, /* input.comments, input.path */0) && _$.ensureScopeWithId($scope0_id)
    }, "__tests__/tags/comments.marko", "2:4", {
      comment_comments: ["comment.comments", "2:8"],
      i: "2:17",
      id: "3:12",
      open: "4:10"
    });
  }, 0, $scope0_id, "#ul/0", _$.serializeGuard($serialize, /* input.comments,input.path */0), _$.serializeGuard($serialize, /* input.comments */1), "</ul>");
  _$.serializeGuard($serialize, /* input.comments */1) && _$.writeScope($scope0_id, {
    input_path: input.path
  }, "__tests__/tags/comments.marko", 0, {
    input_path: ["input.path"]
  });
};
export default _$.createTemplate("__tests__/tags/comments.marko", $content);