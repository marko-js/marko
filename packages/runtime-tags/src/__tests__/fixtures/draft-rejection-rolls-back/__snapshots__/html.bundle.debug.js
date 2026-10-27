// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const fail = _action($scope0_id, "__tests__/template.marko_0_fail#7/action");
	const failNow = _action($scope0_id, "__tests__/template.marko_0_failNow#9/action");
	let caught = "";
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)} ${_text_resume($scope0_id, "#text/2", caught, 2)}</button>${_el_resume($scope0_id, "#button/0")}<button>sync</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		d,
		fail,
		failNow,
		"TagVariableChange:fail": _resume(async () => {
			d = 5;
			await new Promise((resolve) => setTimeout(resolve, 50));
			throw new Error("failed");
		}, "__tests__/template.marko_0/fail", $scope0_id) || void 0,
		"TagVariableChange:failNow": _resume(function() {
			d = 6;
			throw new Error("failed now");
		}, "__tests__/template.marko_0/failNow", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "2:8",
		fail: "3:9",
		failNow: "8:9",
		"TagVariableChange:fail": ["failFn", "3:9"],
		"TagVariableChange:failNow": ["failNowFn", "8:9"]
	});
}, 1);
