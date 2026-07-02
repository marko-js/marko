// tags/child-a/index.marko
var child_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_b = _serialize_guard($scope0_reason, 2), $sg__input_c = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.a)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))} ${_sep($sg__input_b)}${_escape(input.b)}${_el_resume($scope0_id, "b", $sg__input_b)} ${_sep($sg__input_c)}${_escape(input.c)}${_el_resume($scope0_id, "c", $sg__input_c)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/child-c/index.marko
var child_c_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_b = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.a)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))} ${_sep($sg__input_b)}${_escape(input.b)}${_el_resume($scope0_id, "b", $sg__input_b)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const extras = {
		b: 2,
		c: 3
	};
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_a_default({
		a: n,
		...extras
	});
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(6);
	child_a_default({
		...extras,
		a: n
	});
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: _serialize_guard($scope0_reason, 1),
		2: _serialize_guard($scope0_reason, 2)
	});
	child_c_default(input.settings);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		i: extras,
		j: n,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2),
		e: _serialize_if($scope0_reason, 0) && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
