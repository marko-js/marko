// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let local = input.value;
	_html(`<div>${local == null ? "none" : _escape(local)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.value,
		e: _serialize_if($scope0_reason, 1) && input.valueChange
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
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
		}, "a0", $scope0_id)
	});
	_html(`<button>clear</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
