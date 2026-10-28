// tags/pick.marko
var pick_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return input.value + "!";
});

// tags/label.marko
var label_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.get });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let picked = pick_default({ value: input.v });
	$wi__input_v && _var($scope0_id, "b", $childScope, "a1");
	const $childScope2 = _peek_scope_id();
	label_default({ get: _resume(function() {
		return picked;
	}, "a0", $scope0_id) });
	_scope($scope0_id, {
		g: picked,
		a: $wi__input_v && _existing_scope($childScope),
		c: $wi__input_v && _existing_scope($childScope2)
	});
}, 1);
