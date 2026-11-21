// tags/leaf.marko
var leaf_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>leaf</span>");
});

// tags/tree.marko
var tree_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.done ? leaf_default : tree_default, { done: true }, 0, 0, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	tree_default({});
}, 1);
