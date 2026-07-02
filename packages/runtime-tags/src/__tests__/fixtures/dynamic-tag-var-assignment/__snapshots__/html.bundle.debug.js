// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = x;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	writeScope($scope0_id, {
		x,
		"#TagVariableChange": _resume((_new_x) => {
			x = _new_x;
		}, "__tests__/tags/counter.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/tags/counter.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
function getCounter() {
	return counter_default;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $getCounter_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "#text/0", getCounter(), {});
	_var($scope0_id, "#scopeOffset/1", $getCounter_scope, "__tests__/template.marko_0_count/var", "#text/0");
	_html(`<button class=reset>reset</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
