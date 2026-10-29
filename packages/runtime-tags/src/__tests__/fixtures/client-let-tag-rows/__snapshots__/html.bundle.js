// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1), $wi__input_items__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_for_of(input.items, (v) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", T, { label: v + input.label }, 0, 0, $wg__input_items__OR__input_label);
		$wi__input_items__OR__input_label && _scope($scope1_id, {
			c: _write_if($scope0_reason, 2) && v,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_items__OR__input_label, $wg__input_items);
	$wi__input_items__OR__input_label && _scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.label,
		g: T
	});
	$wg__input_items || $wi__input_items__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_items__OR__input_label << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: card_default,
		items: input.items,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
