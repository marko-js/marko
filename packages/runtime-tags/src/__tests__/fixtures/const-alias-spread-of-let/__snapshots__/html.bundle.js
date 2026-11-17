// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.a, _write_guard($scope0_reason, 1))}|${_text_mark($scope0_id, "b", input.b, _write_guard($scope0_reason, 2) * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = {
		a: 1,
		b: 2
	};
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	child_default(o);
	_html(`<button></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
