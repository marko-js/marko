// tags/hello/index.marko
var hello_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.item, [1], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = true;
	_set_serialize_reason(1);
	let $item;
	$item = attrTag({ content: _content("a0", (y) => {
		const $scope1_reason = _scope_reason(), $sg__y = _serialize_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_html(`y: ${_sep($sg__y)}${_escape(y)}${_el_resume($scope1_id, "a", $sg__y)}`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}, $scope0_id) });
	const $childScope = _peek_scope_id();
	hello_default({ item: $item });
	_var($scope0_id, "b", $childScope, "a1");
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
