// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc-child>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $return = x;
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		c: x,
		U: _resume((_new_x) => {
			x = _new_x;
		}, "b0", $scope0_id) || void 0
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let count = counter_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<button class=inc-parent>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<button class=reset>reset</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
