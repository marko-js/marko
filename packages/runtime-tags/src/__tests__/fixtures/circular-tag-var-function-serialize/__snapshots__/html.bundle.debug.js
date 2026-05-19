// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input_valueChange");
	writeScope($scope0_id, { input_valueChange: input.valueChange }, "__tests__/tags/child.marko", 0, { input_valueChange: ["input.valueChange"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const setter = _resume(function() {
		value = 1;
	}, "__tests__/template.marko_0/setter", $scope0_id);
	if (true) {
		const $scope1_id = _scope_id();
		child_default({ valueChange: _resume(function() {
			setter();
		}, "__tests__/template.marko_1/valueChange", $scope1_id) });
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}
	writeScope($scope0_id, { setter }, "__tests__/template.marko", 0, { setter: "2:8" });
}, 1);
