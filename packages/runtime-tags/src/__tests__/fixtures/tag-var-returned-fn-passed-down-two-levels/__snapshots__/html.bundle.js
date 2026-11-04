// tags/make.marko
var make_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = _resume(() => input.v, "b0", $scope0_id);
	_scope($scope0_id, { c: input.v });
	return $return;
});

// tags/reader.marko
var reader_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p></p>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, { c: input });
});

// tags/middle.marko
var middle_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	reader_default({ fn: input.fn });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let fn = make_default({ v: input.v });
	$wi__input_v && _var($scope0_id, "b", $childScope, "a0");
	_set_scope_reason($wg__input_v << 1);
	const $childScope2 = _peek_scope_id();
	middle_default({ fn });
	$wi__input_v && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
