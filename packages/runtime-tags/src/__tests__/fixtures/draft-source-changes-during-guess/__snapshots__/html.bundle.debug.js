// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const hold = _action($scope0_id, "__tests__/template.marko_0_hold#6/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)}</button>${_el_resume($scope0_id, "#button/0")}<button>source</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_hold#6");
	_scope($scope0_id, {
		n,
		d,
		hold,
		"TagVariableChange:hold": _resume(async () => {
			d = 5;
			await resolveAfter(0);
		}, "__tests__/template.marko_0/hold", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		n: "2:6",
		d: "3:8",
		hold: "4:9",
		"TagVariableChange:hold": ["holdFn", "4:9"]
	});
}, 1);
