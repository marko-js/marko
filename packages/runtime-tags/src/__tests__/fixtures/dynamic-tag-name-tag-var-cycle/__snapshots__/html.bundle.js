// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $b_getter = _hoist($scope0_id, "a0");
	const $b_scope = _peek_scope_id();
	let a = _dynamic_tag($scope0_id, "a", $b_getter, {});
	_var($scope0_id, "b", $b_scope, "a1");
	const $a_scope = _peek_scope_id();
	let b = _dynamic_tag($scope0_id, "c", a, {});
	_var($scope0_id, "d", $a_scope, "a2");
	_scope($scope0_id, { f: b });
}, 1);
