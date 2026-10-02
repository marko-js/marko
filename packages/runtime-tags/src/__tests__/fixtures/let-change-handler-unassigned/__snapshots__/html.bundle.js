// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_initial__OR__input_onValue = _write_guard($scope0_reason, 0), $wi__input_initial__OR__input_onValue = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let value = input.initial;
	_html(`<span>${_text_resume($scope0_id, "a", value, $wg__input_initial__OR__input_onValue)}</span>`);
	$wi__input_initial__OR__input_onValue && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.initial,
		e: _write_if($scope0_reason, 1) && input.onValue
	});
	$wg__input_initial__OR__input_onValue || $wi__input_initial__OR__input_onValue && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let initial = 1;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		initial,
		onValue: _resume(() => {}, "a0")
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: initial,
		a: _existing_scope($childScope)
	});
}, 1);
