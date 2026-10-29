// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let T = input.tag;
	_dynamic_tag($scope0_id, "#text/0", T, { title: T }, _content_resume("__tests__/tags/outer.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_escape(T)}:${_text_resume($scope1_id, "#text/1", input.label, $wg__input_label * 2)}`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:4"), "__tests__/tags/outer.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		T,
		input_label: input.label
	}]), 0, 0);
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/6": $input_label__closures }, "__tests__/tags/outer.marko", 0);
	$wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		tag: input.tag,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
