// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc-child>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = x;
	_script($scope0_id, "__tests__/tags/counter.marko_0_x");
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
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let count = counter_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count/var");
	_html(`<button class=inc-parent>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<button class=reset>reset</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:10" });
}, 1);
