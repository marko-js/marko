// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>card</span>");
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let obj = input.fmt;
	_html(`<p>${_text_resume($scope0_id, "a", obj.f(input.label), $wg__input_label)}</p>`);
	$wi__input_label && _scope($scope0_id, { f: obj });
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_alt = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "a0");
	const other = _resume((v) => "g-" + v, "a1");
	_set_scope_reason(_write_guard($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: { f: Object.assign(input.alt ? other : fn, { content: card_default }) },
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		f: $wi__input_alt && fn,
		g: $wi__input_alt && other,
		a: _existing_scope($childScope)
	});
}, 1);
