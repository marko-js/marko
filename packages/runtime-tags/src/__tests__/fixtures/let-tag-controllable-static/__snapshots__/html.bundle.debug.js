// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = x;
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/1")}|<!>${_escape(y)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_y");
	writeScope($scope0_id, {
		y,
		"TagVariableChange:y": _resume(function(newValue) {
			x = newValue + 1;
		}, "__tests__/template.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, { y: "2:6" });
	_resume_branch($scope0_id);
}, 1);
