// tags/tree/index.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0), $si__input_depth = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason($sg__input_depth);
			let nested = $content({ depth: input.depth - 1 });
			_var($scope1_id, "b", $childScope, "b0");
			_html(`<div>nested ${_escape(nested)}</div>`);
			$si__input_depth && writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	const $return = input.depth;
	$si__input_depth && writeScope($scope0_id, { d: input.depth });
	return $return;
};
var tree_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let total = tree_default({ depth: n });
	_var($scope0_id, "c", $childScope, "a0");
	_html(`<div>total <!>${_escape(total)}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: n,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
