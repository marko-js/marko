// tags/setter.marko
var setter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const setter = _resume(function() {
		input.valueChange(1);
	}, "b0", $scope0_id);
	const $return = (input.value, setter);
	writeScope($scope0_id, {
		c: input.valueChange,
		d: _serialize_if($scope0_reason, 0) && input.value,
		e: _serialize_if($scope0_reason, 1) && setter
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 1: 1 });
	let setCount = setter_default({
		value: count,
		valueChange: _resume((_new_count) => {
			count = _new_count;
		}, "a0", $scope0_id)
	});
	_var($scope0_id, "b", $childScope, "a1");
	_html(`<div>${_escape(count)}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: setCount,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
