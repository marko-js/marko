// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.value;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {
		input_value: _serialize_if($scope0_reason, 1) && input.value,
		input_valueChange: _serialize_if($scope0_reason, 0) && input.valueChange,
		"TagVariableChange:x": input.valueChange || void 0
	}, "__tests__/tags/child.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"TagVariableChange:x": ["xChange", "1:6"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	const onChange = _resume((next) => {
		out = String(next);
	}, "__tests__/template.marko_0/onChange", $scope0_id);
	child_default({
		value: 1,
		valueChange: onChange
	});
	_html(`<p id=out>${_text_resume($scope0_id, "#text/1", out)}</p>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
