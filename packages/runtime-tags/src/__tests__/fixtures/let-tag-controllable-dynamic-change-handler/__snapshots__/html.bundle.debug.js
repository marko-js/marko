// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let yChange = _resume(function(newValue) {
		x = newValue + 1;
	}, "__tests__/template.marko_0/yChange", $scope0_id);
	let y = x;
	_html(`<button id=inc>${_escape(x)}${_el_resume($scope0_id, "#text/1")}|<!>${_escape(y)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_y");
	writeScope($scope0_id, {
		x,
		yChange,
		y,
		"TagVariableChange:y": yChange || void 0
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		yChange: "2:6",
		y: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
