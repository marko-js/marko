// tags/comments.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_comments = _serialize_guard($scope0_reason, 1), $sg__input_comments__OR__input_path = _serialize_guard($scope0_reason, 0), $si__input_comments = _serialize_if($scope0_reason, 1), $si__input_comments__OR__input_path = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.comments, (comment, i) => {
		const $scope1_id = _scope_id();
		const id = `${input.path || "c"}-${i}`;
		let open = true;
		_html(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_escape(comment.text)}${_el_resume($scope1_id, "#text/1", $sg__input_comments)}</span><button>${open ? "[-]" : "[+]"}${_el_resume($scope1_id, "#text/3")}</button>${_el_resume($scope1_id, "#button/2")}`);
		_if(() => {
			if (comment.comments) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_set_serialize_reason({
					0: $sg__input_comments__OR__input_path,
					1: $sg__input_comments,
					2: _serialize_guard($scope0_reason, 2)
				});
				$content({
					comments: comment.comments,
					path: id
				});
				$si__input_comments__OR__input_path && writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/comments.marko", "10:8");
				return 0;
			}
		}, $scope1_id, "#text/4", $sg__input_comments__OR__input_path, $sg__input_comments, $sg__input_comments, 0, 1);
		_html(`</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/tags/comments.marko_1");
		writeScope($scope1_id, {
			comment_comments: $si__input_comments && comment?.comments,
			"#LoopKey": _serialize_if($scope0_reason, 2) && i,
			id: $si__input_comments && id,
			open,
			_: $si__input_comments__OR__input_path && _scope_with_id($scope0_id)
		}, "__tests__/tags/comments.marko", "2:4", {
			comment_comments: ["comment.comments", "2:8"],
			"#LoopKey": "2:17",
			id: "3:12",
			open: "4:10"
		});
	}, 0, $scope0_id, "#ul/0", $sg__input_comments__OR__input_path, $sg__input_comments, $sg__input_comments, "</ul>", 1);
	$si__input_comments && writeScope($scope0_id, { input_path: input.path }, "__tests__/tags/comments.marko", 0, { input_path: ["input.path"] });
};
var comments_default = _template("__tests__/tags/comments.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: _serialize_guard($scope0_reason, 1),
		2: _serialize_guard($scope0_reason, 2)
	});
	comments_default(input);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
