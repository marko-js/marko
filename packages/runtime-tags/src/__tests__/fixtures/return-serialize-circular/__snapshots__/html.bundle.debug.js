// tags/setter.marko
var setter_default = _template("__tests__/tags/setter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const setter = _resume(function() {
		input.valueChange(1);
	}, "__tests__/tags/setter.marko_0/setter", $scope0_id);
	const $return = (input.value, setter);
	writeScope($scope0_id, {
		input_valueChange: input.valueChange,
		input_value: _serialize_if($scope0_reason, 0) && input.value,
		setter: _serialize_if($scope0_reason, 1) && setter
	}, "__tests__/tags/setter.marko", 0, {
		input_valueChange: ["input.valueChange"],
		input_value: ["input.value"],
		setter: "1:8"
	});
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 1: 1 });
	let setCount = setter_default({
		value: count,
		valueChange: _resume((_new_count) => {
			count = _new_count;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_setCount/var");
	_html(`<div>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_setCount");
	writeScope($scope0_id, {
		setCount,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { setCount: "2:9" });
	_resume_branch($scope0_id);
}, 1);
