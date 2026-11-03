// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.v, (value) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		label_default({ get: _resume(function() {
			return value;
		}, "__tests__/template.marko_1/get", $scope1_id) });
		_scope($scope1_id, {
			value,
			"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { value: "1:8" });
	});
}, 1);
