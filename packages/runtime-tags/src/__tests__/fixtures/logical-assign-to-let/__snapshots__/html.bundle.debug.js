// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let changes = 0;
	let value = 1;
	let x = value;
	_html(`<button id=or>or</button>${_el_resume($scope0_id, "#button/0")}<button id=and>and</button>${_el_resume($scope0_id, "#button/1")}<button id=nullish>nullish</button>${_el_resume($scope0_id, "#button/2")}<div>value=<!>${_escape(value)}${_el_resume($scope0_id, "#text/3")} changes=<!>${_escape(changes)}${_el_resume($scope0_id, "#text/4")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		changes,
		value,
		x,
		"TagVariableChange:x": _resume(function(v) {
			value = v;
			changes++;
		}, "__tests__/template.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		changes: "1:6",
		value: "2:6",
		x: "3:6",
		"TagVariableChange:x": ["xChange", "3:6"]
	});
	_resume_branch($scope0_id);
}, 1);
