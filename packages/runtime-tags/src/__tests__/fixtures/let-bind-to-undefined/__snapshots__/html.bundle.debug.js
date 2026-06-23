// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let local = input.value;
	_html(`<div>${local == null ? "none" : _escape(local)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	writeScope($scope0_id, {
		input_value: _serialize_if($scope0_reason, 2) && input.value,
		input_valueChange: _serialize_if($scope0_reason, 1) && input.valueChange,
		"TagVariableChange:local": input.valueChange || void 0
	}, "__tests__/tags/child.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"]
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		1: 1
	});
	child_default({
		value: count,
		valueChange: _resume((_new_count) => {
			count = _new_count;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
