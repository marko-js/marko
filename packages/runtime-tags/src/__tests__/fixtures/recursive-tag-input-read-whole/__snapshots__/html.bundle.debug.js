// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_depth__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth__OR__input_label << 1 | $wg__input_depth << 3 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				label: input.label
			});
			$wi__input_depth__OR__input_label && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth__OR__input_label, $wg__input_depth);
	_html(`<span>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</span>`);
	$wi__input_depth__OR__input_label && _scope($scope0_id, { input_label: _write_if($scope0_reason, 1) && input.label }, "__tests__/tags/tree.marko", 0, { input_label: ["input.label"] });
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let depth = 1;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	tree_default({
		depth,
		label: "x"
	});
	_html(`<button>deeper</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		depth,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { depth: "1:6" });
}, 1);
