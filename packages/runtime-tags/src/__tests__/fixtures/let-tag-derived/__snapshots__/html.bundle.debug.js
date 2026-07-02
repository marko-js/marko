// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { a } = input;
	let b = a * 2;
	_html(`<button>Increment</button>${_el_resume($scope0_id, "#button/0")}${_escape(a)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))} <!>${_escape(b)}${_el_resume($scope0_id, "#text/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { b }, "__tests__/template.marko", 0, { b: "2:6" });
	_resume_branch($scope0_id);
}, 1);
