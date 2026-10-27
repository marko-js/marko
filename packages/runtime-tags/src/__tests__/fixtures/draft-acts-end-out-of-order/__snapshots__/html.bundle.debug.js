// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const slow = _action($scope0_id, "__tests__/template.marko_0_slow#5/action");
	const fast = _action($scope0_id, "__tests__/template.marko_0_fast#7/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		d,
		slow,
		fast,
		"TagVariableChange:slow": _resume(async () => {
			d = "slow";
			await new Promise((resolve) => setTimeout(resolve, 250));
		}, "__tests__/template.marko_0/slow", $scope0_id) || void 0,
		"TagVariableChange:fast": _resume(async () => {
			d = "fast";
			await new Promise((resolve) => setTimeout(resolve, 100));
		}, "__tests__/template.marko_0/fast", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "2:8",
		slow: "3:9",
		fast: "7:9",
		"TagVariableChange:slow": ["slowFn", "3:9"],
		"TagVariableChange:fast": ["fastFn", "7:9"]
	});
}, 1);
