// tags/g.marko
var g_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const $return = 0;
	writeScope($scope0_id, { U: _resume(function(next) {
		$global$1.store = next;
	}, "b0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = g_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<button>${_escape(v)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
