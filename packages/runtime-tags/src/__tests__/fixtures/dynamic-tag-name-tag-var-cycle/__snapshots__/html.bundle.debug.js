// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $b_getter = _hoist($scope0_id, "__tests__/template.marko_0_b#5/hoist");
	const $b_scope = _peek_scope_id();
	let a = _dynamic_tag($scope0_id, "#text/0", $b_getter, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $b_scope, "__tests__/template.marko_0_a#4/var");
	const $a_scope = _peek_scope_id();
	let b = _dynamic_tag($scope0_id, "#text/2", a, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/3", $a_scope, "__tests__/template.marko_0_b#5/var");
	_scope($scope0_id, { b }, "__tests__/template.marko", 0, { b: "2:7" });
	_assert_hoist(b);
}, 1);
