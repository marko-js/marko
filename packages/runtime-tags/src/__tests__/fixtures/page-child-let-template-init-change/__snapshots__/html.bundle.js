// tags/card.marko
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/big.marko
var big_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<strong>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</strong>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let T = input.tag;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", T, { label: input.label }, 0, 0, $wg__input_label);
			_html("</section>");
			$wi__input_more__OR__input_label && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_more, 0, 0, 1);
	$wi__input_more__OR__input_label && _scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.label,
		g: T
	});
	$wg__input_more || $wi__input_more__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		tag: input.big ? big_default : card_default,
		label: input.label,
		more: input.more
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
