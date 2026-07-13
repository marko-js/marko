// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Let = { content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let internal = 0;
		const $return = internal;
		writeScope($scope1_id, { U: _resume((_new_internal) => {
			internal = _new_internal;
		}, "a0", $scope1_id) || void 0 });
		_resume_branch($scope1_id);
		return $return;
	}) };
	const $childScope = _peek_scope_id();
	let a = Let.content({});
	_var($scope0_id, "b", $childScope, "a2");
	let b = 0;
	_html(`<button>${_escape(`${a}`)},${_escape(`${b}`)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		e: a,
		f: b,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
