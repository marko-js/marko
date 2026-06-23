// tags/let-global.marko
var subsByKey;
var let_global_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = $global()[input.value];
	_script($scope0_id, "c1");
	writeScope($scope0_id, {
		c: input.value,
		U: _resume(function(next) {
			$global()[input.value] = next;
			subsByKey[input.value]?.forEach((cb) => cb());
		}, "c0", $scope0_id) || void 0
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let a = let_global_default({ value: "count" });
	_var($scope0_id, "b", $childScope, "a0");
	let b = a + 1;
	_html(`<div>${_escape(a)}${_el_resume($scope0_id, "c")}</div><div>${_escape(b)}${_el_resume($scope0_id, "d")}</div><button>${_escape(`${a}`)},${_escape(`${b}`)}${_el_resume($scope0_id, "f")}</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: a,
		h: b,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
