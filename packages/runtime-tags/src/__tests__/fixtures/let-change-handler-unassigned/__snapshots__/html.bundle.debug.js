// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_initial__OR__input_onValue = _write_guard($scope0_reason, 0), $wi__input_initial__OR__input_onValue = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { initial, onValue } = input;
	let value = initial;
	_html(`<span>${_text_resume($scope0_id, "#text/0", value, $wg__input_initial__OR__input_onValue)}</span>`);
	$wi__input_initial__OR__input_onValue && _scope($scope0_id, {
		initial: _write_if($scope0_reason, 2) && initial,
		onValue: _write_if($scope0_reason, 1) && onValue
	}, "__tests__/tags/child.marko", 0, {
		initial: "1:10",
		onValue: "1:19"
	});
	$wg__input_initial__OR__input_onValue || $wi__input_initial__OR__input_onValue && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let initial = 1;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		initial,
		onValue: _resume(() => {}, "__tests__/template.marko_0/onValue")
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		initial,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { initial: "1:6" });
}, 1);
