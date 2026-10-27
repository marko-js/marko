// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let stuck = n;
	let quick = n;
	const hang = _action($scope0_id, "__tests__/template.marko_0_hang#8/action");
	const brief = _action($scope0_id, "__tests__/template.marko_0_brief#10/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", stuck)} ${_text_resume($scope0_id, "#text/2", quick, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		stuck,
		quick,
		hang,
		brief,
		"TagVariableChange:hang": _resume(async () => {
			stuck = "stuck";
			await new Promise(() => {});
		}, "__tests__/template.marko_0/hang", $scope0_id) || void 0,
		"TagVariableChange:brief": _resume(async () => {
			quick = "quick";
			await resolveAfter(0);
		}, "__tests__/template.marko_0/brief", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		stuck: "3:8",
		quick: "4:8",
		hang: "5:9",
		brief: "9:9",
		"TagVariableChange:hang": ["hangFn", "5:9"],
		"TagVariableChange:brief": ["briefFn", "9:9"]
	});
}, 1);
