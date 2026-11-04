// tags/make.marko
var make_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const get = _resume(() => input.v, "b0", $scope0_id);
	_html(`<p></p>${_el_resume($scope0_id, "a")}`);
	const $return = get;
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		d: input.v,
		e: get
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let fn = make_default({ v: input.v });
	$wi__input_v && _var($scope0_id, "b", $childScope, "a0");
	_html(`<div>${_text_resume($scope0_id, "c", fn(), $wg__input_v)}</div>`);
	$wi__input_v && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
