// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
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
function getCounter() {
	return counter_default;
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $getCounter_scope = _peek_scope_id();
	_dynamic_tag($scope0_id, "a", getCounter(), {});
	_var($scope0_id, "b", $getCounter_scope, "a0", "a");
	_html(`<button class=reset>reset</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
}, 1);
