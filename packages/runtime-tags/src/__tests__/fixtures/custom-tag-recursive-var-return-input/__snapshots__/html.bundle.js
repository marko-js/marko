// tags/countdown.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_depth__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_depth__OR__input_label = _write_if($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth__OR__input_label << 1 | $wg__input_depth << 3 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			let child = $content({
				depth: input.depth - 1,
				label: input.label
			});
			$wi__input_depth__OR__input_label && _var($scope1_id, "b", $childScope, "b0");
			_html(`<span>${_text_resume($scope1_id, "c", child, $wg__input_label)}</span>`);
			$wi__input_depth__OR__input_label && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_depth__OR__input_label, $wg__input_depth);
	const $return = input.label;
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.label });
	return $return;
};
var countdown_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	countdown_default({
		depth: 1,
		label: "x"
	});
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	countdown_default({
		depth: 1,
		label
	});
	_html(`<button>${_text_resume($scope0_id, "d", label)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: label,
		b: _existing_scope($childScope)
	});
}, 1);
