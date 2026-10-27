// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	let seen = "";
	const act = _action($scope0_id, "__tests__/template.marko_0_act#7/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)} ${_text_resume($scope0_id, "#text/2", seen, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_act#7");
	_scope($scope0_id, {
		d,
		act,
		"TagVariableChange:act": _resume(function() {
			d = 5;
			d = 6;
			seen = d;
		}, "__tests__/template.marko_0/act", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "2:8",
		act: "4:9",
		"TagVariableChange:act": ["actFn", "4:9"]
	});
}, 1);
