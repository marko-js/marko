// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.a, _write_guard($scope0_reason, 0))}</div><button class=log>log</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.a });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "hello";
	_html(`<button class=change>change</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ a });
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
