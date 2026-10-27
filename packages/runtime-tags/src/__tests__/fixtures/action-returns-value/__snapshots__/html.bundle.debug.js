// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let result = 0;
	const double = _action($scope0_id, "__tests__/template.marko_0_double#3/action");
	const busy = _action($scope0_id, "__tests__/template.marko_0_busy#5/action");
	const bump = _action($scope0_id, "__tests__/template.marko_0_bump#7/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", result)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		result,
		double,
		busy,
		bump,
		"TagVariableChange:double": _resume((x) => x * 2, "__tests__/template.marko_0/double") || void 0,
		"TagVariableChange:busy": void 0 || void 0,
		"TagVariableChange:bump": _resume(function(by) {
			result += by;
		}, "__tests__/template.marko_0/bump", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		result: "1:6",
		double: "3:9",
		busy: "4:9",
		bump: "5:9",
		"TagVariableChange:double": ["doubleFn", "3:9"],
		"TagVariableChange:busy": ["busyFn", "4:9"],
		"TagVariableChange:bump": ["bumpFn", "5:9"]
	});
}, 1);
