// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", f())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth__OR__input_fn = _write_guard($scope0_reason, 0), $wg__input_fn = _write_guard($scope0_reason, 2), $wg__input_depth = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ fn: input.fn });
			_set_scope_reason($wg__input_depth__OR__input_fn << 1 | $wg__input_depth << 3 | $wg__input_fn << 5);
			const $childScope2 = _peek_scope_id();
			$content({
				fn: input.fn,
				depth: input.depth - 1
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 2) && _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_depth__OR__input_fn, $wg__input_depth);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.fn });
};
var tree_default = _template("c", $content);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			tree_default({
				depth: 2,
				fn: function() {
					return "f:" + input.label;
				}
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.label });
}, 1);
