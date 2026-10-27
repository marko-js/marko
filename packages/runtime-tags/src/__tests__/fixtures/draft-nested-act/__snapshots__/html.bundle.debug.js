// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	let seen = "";
	const inner = _action($scope0_id, "__tests__/template.marko_0_inner#7/action");
	const outer = _action($scope0_id, "__tests__/template.marko_0_outer#10/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)} ${_text_resume($scope0_id, "#text/2", seen, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_outer#10");
	_scope($scope0_id, {
		d,
		inner,
		outer,
		"TagVariableChange:inner": _resume(function() {}, "__tests__/template.marko_0/inner") || void 0,
		"TagVariableChange:outer": _resume(function() {
			inner();
			d = 4;
			seen = d;
		}, "__tests__/template.marko_0/outer", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "2:8",
		inner: "4:9",
		outer: "5:9",
		"TagVariableChange:inner": ["innerFn", "4:9"],
		"TagVariableChange:outer": ["outerFn", "5:9"]
	});
}, 1);
