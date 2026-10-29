// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const obj = { g: f };
	_html(`<p>${_text_resume($scope0_id, "#text/0", obj.g(input.label), $wg__input_label)}</p>`);
	$wi__input_label && _scope($scope0_id, { obj }, "__tests__/tags/outer.marko", 0, { obj: "2:8" });
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: fn,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
