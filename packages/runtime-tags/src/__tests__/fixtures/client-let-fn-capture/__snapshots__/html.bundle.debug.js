// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<p>${_text_resume($scope0_id, "#text/0", f(input.label), $wg__input_label)}</p>`);
	$wi__input_label && _scope($scope0_id, { f }, "__tests__/tags/outer.marko", 0, { f: "1:6" });
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => input.prefix + v, "__tests__/template.marko_0/fn", $scope0_id);
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: fn,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_prefix: _write_if($scope0_reason, 1) && input.prefix,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_prefix: ["input.prefix"] });
}, 1);
