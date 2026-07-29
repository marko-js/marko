// tags/comments.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $si__input_comments__OR__input_path = _serialize_if($scope0_reason, 0), $sg__input_comments = _serialize_guard($scope0_reason, 1), $si__input_comments = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.comments, (comment, i) => {
		const $scope1_id = _scope_id();
		const id = `${input.path || "c"}-${i}`;
		let open = true;
		_html(`<li${_attr("id", id)}${_attr("hidden", false)}><span>${_escape(comment.text)}${_el_resume($scope1_id, "b")}</span><button>[-]${_el_resume($scope1_id, "d")}</button>${_el_resume($scope1_id, "c")}`);
		_if(() => {
			if (comment.comments) {
				const $scope2_id = _scope_id();
				_set_serialize_reason({
					0: _serialize_guard($scope0_reason, 0),
					1: $sg__input_comments,
					2: _serialize_guard($scope0_reason, 2)
				});
				const $childScope = _peek_scope_id();
				$content({
					comments: comment.comments,
					path: id
				});
				writeScope($scope2_id, {
					_: $si__input_comments__OR__input_path && _scope_with_id($scope1_id),
					a: $si__input_comments__OR__input_path && _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "e", 1, 1, $sg__input_comments, 0, 1);
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, {
			i: $si__input_comments && comment?.comments,
			M: _serialize_if($scope0_reason, 2) && i,
			l: $si__input_comments && id,
			m: open,
			_: $si__input_comments__OR__input_path && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, $sg__input_comments, "</ul>", 1);
	writeScope($scope0_id, { e: $si__input_comments && input.path });
};
var comments_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: _serialize_guard($scope0_reason, 1),
		2: _serialize_guard($scope0_reason, 2)
	});
	const $childScope = _peek_scope_id();
	comments_default(input);
	writeScope($scope0_id, { a: _serialize_if($scope0_reason, 0) && _existing_scope($childScope) });
}, 1);
