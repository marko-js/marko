// tags/comments.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_comments = _write_guard($scope0_reason, 1), $wg__input_comments__OR__input_path = _write_guard($scope0_reason, 0), $wi__input_comments__OR__input_path = _write_if($scope0_reason, 0), $wi__input_comments = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.comments, (comment, i) => {
		const $scope1_id = _scope_id();
		const id = `${input.path || "c"}-${i}`;
		let open = true;
		_html(`<li${_attr("id", id)}${_attr("hidden", !open)}><span>${_text_resume($scope1_id, "#text/1", comment.text, $wg__input_comments)}</span><button>${_text_resume($scope1_id, "#text/3", open ? "[-]" : "[+]")}</button>${_el_resume($scope1_id, "#button/2")}`);
		_if(() => {
			if (comment.comments) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__input_comments__OR__input_path << 1 | $wg__input_comments << 3 | _write_guard($scope0_reason, 2) << 5);
				const $childScope = _peek_scope_id();
				$content({
					comments: comment.comments,
					path: id
				});
				$wi__input_comments__OR__input_path && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/comments.marko", "10:8");
				return 0;
			}
		}, $scope1_id, "#text/4", $wg__input_comments__OR__input_path, $wg__input_comments, $wg__input_comments, 0, 1);
		_html(`</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/tags/comments.marko_1");
		_scope($scope1_id, {
			"#LoopKey": _write_if($scope0_reason, 2) && i,
			id: $wi__input_comments && id,
			open,
			_: $wi__input_comments__OR__input_path && _scope_with_id($scope0_id)
		}, "__tests__/tags/comments.marko", "2:4", {
			"#LoopKey": "2:17",
			id: "3:12",
			open: "4:10"
		});
	}, 0, $scope0_id, "#ul/0", $wg__input_comments__OR__input_path, $wg__input_comments, $wg__input_comments, "</ul>", 1);
	$wi__input_comments && _scope($scope0_id, { input_path: input.path }, "__tests__/tags/comments.marko", 0, { input_path: ["input.path"] });
};
var comments_default = _template("__tests__/tags/comments.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_comments__OR__input_path = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_comments__OR__input_path << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	comments_default(input);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
