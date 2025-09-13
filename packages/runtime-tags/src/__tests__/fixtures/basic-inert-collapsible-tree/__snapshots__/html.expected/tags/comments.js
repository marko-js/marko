import * as _ from "@marko/runtime-tags/debug/html";
const $content = (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html("<ul>");
  _._for_of(input.comments, (comment, i) => {
    const $scope1_id = _._scope_id();
    const id = `${input.path || "c"}-${i}`;
    let open = true;
    _._html(`<li${_._attr("id", id)}${_._attr("hidden", !open)}><span>${_._escape(comment.text)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($serialize, /* input.comments */1))}</span><button>${_._escape(open ? "[-]" : "[+]")}${_._el_resume($scope1_id, "#text/3")}</button>${_._el_resume($scope1_id, "#button/2")}`);
    _._if(() => {
      if (comment.comments) {
        const $scope2_id = _._scope_id();
        const $childScope = _._peek_scope_id();
        $content({
          comments: comment.comments,
          path: id
        });
        _._serialize_guard($serialize, /* input.comments,input.path */0) && _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id),
          "#childScope/0": _._serialize_if($serialize, /* input.comments, input.path */0) && _._existing_scope($childScope)
        }, "__tests__/tags/comments.marko", "10:8");
        return 0;
      }
    }, $scope1_id, "#text/4", _._serialize_guard($serialize, /* input.comments,input.path */0), _._serialize_guard($serialize, /* input.comments */1), _._serialize_guard($serialize, /* input.comments */1), 0, 1);
    _._html(`</li>${_._el_resume($scope1_id, "#li/0")}`);
    _._script($scope1_id, "__tests__/tags/comments.marko_1_open");
    _._scope($scope1_id, {
      comment_comments: _._serialize_if($serialize, /* input.comments, input.path */0) && comment?.comments,
      i: _._serialize_if($serialize, /* input.path */2) && i,
      id: _._serialize_if($serialize, /* input.comments */1) && id,
      open,
      _: _._serialize_if($serialize, /* input.comments, input.path */0) && _._scope_with_id($scope0_id)
    }, "__tests__/tags/comments.marko", "2:4", {
      comment_comments: ["comment.comments", "2:8"],
      i: "2:17",
      id: "3:12",
      open: "4:10"
    });
  }, 0, $scope0_id, "#ul/0", _._serialize_guard($serialize, /* input.comments,input.path */0), _._serialize_guard($serialize, /* input.comments */1), _._serialize_guard($serialize, /* input.comments */1), "</ul>", 1);
  _._serialize_guard($serialize, /* input.comments */1) && _._scope($scope0_id, {
    input_path: input.path
  }, "__tests__/tags/comments.marko", 0, {
    input_path: ["input.path"]
  });
};
export default _._template("__tests__/tags/comments.marko", $content);