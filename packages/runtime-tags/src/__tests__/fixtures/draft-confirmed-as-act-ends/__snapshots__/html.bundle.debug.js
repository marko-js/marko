// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const save = _action($scope0_id, "__tests__/template.marko_0_save#5/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_save#5");
	_scope($scope0_id, {
		d,
		save,
		"TagVariableChange:save": _resume(async () => {
			d = 2;
			await resolveAfter(0);
			n = 3;
		}, "__tests__/template.marko_0/save", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "3:8",
		save: "4:9",
		"TagVariableChange:save": ["saveFn", "4:9"]
	});
}, 1);
