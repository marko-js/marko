// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth__OR__input_get = _write_guard($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth__OR__input_get << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				get: input.get
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth__OR__input_get, $wg__input_depth);
	_html(`<span>${_text_resume($scope0_id, "#text/1", input.depth, $wg__input_depth)}</span>`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_get: input.get }, "__tests__/tags/tree.marko", 0, { input_get: ["input.get"] });
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_set_scope_reason($wg__input_title << 1);
	const $childScope = _peek_scope_id();
	tree_default({
		depth: 2,
		get: getTitle
	});
	_script($scope0_id, "__tests__/template.marko_0_getTitle#4", $wg__input_title);
	_scope($scope0_id, {
		input_title: input.title,
		getTitle,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		getTitle: "1:8"
	});
}, 1);
