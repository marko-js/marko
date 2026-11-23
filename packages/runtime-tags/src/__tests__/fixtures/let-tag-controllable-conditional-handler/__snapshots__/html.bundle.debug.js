// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	let b = 1;
	_html(`<button>${_text_mark($scope0_id, "#text/1", a)}|${_text_mark($scope0_id, "#text/2", b, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		b,
		"TagVariableChange:a": (input.on ? "log" : "") || void 0,
		"TagVariableChange:b": (input.on ? "log" : _resume((next) => console.log(next), "__tests__/template.marko_0/valueChange")) || void 0
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6",
		"TagVariableChange:a": ["aChange", "1:6"],
		"TagVariableChange:b": ["bChange", "2:6"]
	});
}, 1);
