// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let v = input.value;
	_dynamic_tag($scope0_id, "a", v.tag, { label: input.label }, 0, 0, $wg__input_label);
	_html(`<p>${_text_resume($scope0_id, "b", v.fmt(input.label), $wg__input_label)}</p>`);
	$wi__input_label && _scope($scope0_id, {
		g: v,
		i: v?.tag
	});
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
		value: {
			tag: card_default,
			fmt: input.alt ? other : fn
		},
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		f: $wi__input_alt && fn,
		g: $wi__input_alt && other,
		a: _existing_scope($childScope)
	});
}, 1);
