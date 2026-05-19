// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 1;
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}${_escape(y)}${_el_resume($scope0_id, "#text/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_x_y");
	writeScope($scope0_id, {
		x,
		y,
		"TagVariableChange:y": false || void 0
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		y: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
