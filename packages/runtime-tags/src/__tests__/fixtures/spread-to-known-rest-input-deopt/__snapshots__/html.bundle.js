// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	_html(" <span");
	_attrs_content({
		class: _class,
		...rest
	}, "a", $scope0_id, "span");
	_html(`</span>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && _class,
		e: _write_if($scope0_reason, 0) && rest
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input << 1 | $wg__input << 3);
	const $childScope = _peek_scope_id();
	child_default({
		"data-foo": 1,
		...input
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
