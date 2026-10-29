// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>card</span>");
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let obj = input.fmt;
	_html(`<p>${_text_resume($scope0_id, "#text/0", obj.f(input.label), $wg__input_label)}</p>`);
	$wi__input_label && _scope($scope0_id, { obj }, "__tests__/tags/outer.marko", 0, { obj: "1:6" });
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_alt = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	const other = _resume((v) => "g-" + v, "__tests__/template.marko_0/other");
	_set_scope_reason(_write_guard($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: { f: Object.assign(input.alt ? other : fn, { content: card_default }) },
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		fn: $wi__input_alt && fn,
		other: $wi__input_alt && other,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		fn: "2:8",
		other: "3:8"
	});
}, 1);
