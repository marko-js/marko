// tags/g.marko
var g_default = _template("__tests__/tags/g.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let value = 0;
	const $return = value;
	writeScope($scope0_id, { "#TagVariableChange": _resume(function(next) {
		$global$1.store = next;
	}, "__tests__/tags/g.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/tags/g.marko", 0);
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = g_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#4/var");
	_html(`<button>${_escape(v)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
