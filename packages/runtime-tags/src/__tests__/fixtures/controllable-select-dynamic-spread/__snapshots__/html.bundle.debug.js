// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	_dynamic_tag($scope0_id, "#text/0", "select" ? "select" : {}, {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<option${_attrs({ value: "a" }, "#option/0", $scope1_id, "option")}>A</option>${_el_resume($scope1_id, "#option/0")}<option${_attrs({ value: "b" }, "#option/1", $scope1_id, "option")}>B</option>${_el_resume($scope1_id, "#option/1")}<option${_attrs({ value: "c" }, "#option/2", $scope1_id, "option")}>C</option>${_el_resume($scope1_id, "#option/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, $scope0_id));
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</span>`);
	writeScope($scope0_id, { value }, "__tests__/template.marko", 0, { value: "1:6" });
	_resume_branch($scope0_id);
}, 1);
