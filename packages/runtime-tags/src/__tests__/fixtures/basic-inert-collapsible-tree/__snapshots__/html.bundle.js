// tags/comments.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_comments = _write_guard($scope0_reason, 1), $wg__input_comments__OR__input_path = _write_guard($scope0_reason, 0), $wi__input_comments__OR__input_path = _write_if($scope0_reason, 0), $wi__input_comments = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.comments, (comment, i) => {
		const $scope1_id = _scope_id();
		const id = `${input.path || "c"}-${i}`;
		let open = true;
		_html(`<li${_attr("id", id)}${_attr("hidden", false)}><span>${_text_resume($scope1_id, "b", comment.text, $wg__input_comments)}</span><button>${_text_resume($scope1_id, "d", "[-]")}</button>${_el_resume($scope1_id, "c")}`);
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
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "e", $wg__input_comments__OR__input_path, $wg__input_comments, 0, 0, 1);
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {
			M: _write_if($scope0_reason, 2) && i,
			l: $wi__input_comments && id,
			m: open,
			_: $wi__input_comments__OR__input_path && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_comments__OR__input_path, $wg__input_comments, $wg__input_comments, "</ul>", 1);
	$wi__input_comments && _scope($scope0_id, { e: input.path });
};
var comments_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_comments__OR__input_path = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_comments__OR__input_path << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	comments_default(input);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
