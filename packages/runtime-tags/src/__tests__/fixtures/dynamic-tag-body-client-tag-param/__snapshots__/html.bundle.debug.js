// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_note = _write_if($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_resume($scope1_id, "#text/0", input.note, $wg__input_note));
		$wi__input_tag__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:4"), "__tests__/tags/child.marko_1_input_note#0:4/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_tag__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_tag);
	$wi__input_tag__OR__input_note && _scope($scope0_id, {
		input_note: _write_if($scope0_reason, 1) && input.note,
		"ClosureScopes:input_note/5": $wi__input_note && $input_note__closures
	}, "__tests__/tags/child.marko", 0, { input_note: ["input.note"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tag = "b";
	_html(`<button>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		tag,
		note: input.note
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		tag,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { tag: "1:6" });
}, 1);
