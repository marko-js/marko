// tags/leaf.marko
var leaf_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>leaf</span>");
});

// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0), $si__input_depth = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.depth, $sg__input_depth)}</div>`);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_serialize_reason($sg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$content({ depth: input.depth - 1 });
			$si__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	leaf_default({});
	$si__input_depth && _scope($scope0_id, {});
};
var tree_default = _template("c", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	tree_default({ depth: 2 });
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: n });
}, 1);
