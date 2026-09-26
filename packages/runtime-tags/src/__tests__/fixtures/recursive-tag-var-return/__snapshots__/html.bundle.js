// tags/rec.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_serialize_reason($sg__input_depth << 1);
			const $childScope = _peek_scope_id();
			let child = $content({ depth: input.depth - 1 });
			_var($scope1_id, "b", $childScope, "b0");
			_html(`<span>${_text_resume($scope1_id, "c", child)}</span>`);
			_scope($scope1_id, {
				_: _serialize_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	const $return = n;
	_script($scope0_id, "b1");
	_scope($scope0_id, { g: n });
	return $return;
};
var rec_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	rec_default({ depth: 1 });
}, 1);
