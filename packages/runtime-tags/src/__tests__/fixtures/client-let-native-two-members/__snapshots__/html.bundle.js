// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let T = input.tag;
	_dynamic_tag($scope0_id, "a", T.a, { title: input.label }, 0, 0, $wg__input_label);
	_dynamic_tag($scope0_id, "b", T.b, { title: input.label }, 0, 0, $wg__input_label);
	$wi__input_label && _scope($scope0_id, {
		h: T?.a,
		j: T?.b
	});
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		tag: {
			a: input.tag,
			b: input.tag
		},
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
