// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const set = _action($scope0_id, "__tests__/template.marko_0_set#5/action");
	const outer = _action($scope0_id, "__tests__/template.marko_0_outer#7/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_outer#7");
	_scope($scope0_id, {
		d,
		set,
		outer,
		"TagVariableChange:set": _resume(async () => {
			d = 9;
			await new Promise((resolve) => setTimeout(resolve, 100));
		}, "__tests__/template.marko_0/set", $scope0_id) || void 0,
		"TagVariableChange:outer": _resume(async () => {
			await new Promise((resolve) => setTimeout(resolve, 20));
			set();
		}, "__tests__/template.marko_0/outer", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "2:8",
		set: "3:9",
		outer: "7:9",
		"TagVariableChange:set": ["setFn", "3:9"],
		"TagVariableChange:outer": ["outerFn", "7:9"]
	});
}, 1);
