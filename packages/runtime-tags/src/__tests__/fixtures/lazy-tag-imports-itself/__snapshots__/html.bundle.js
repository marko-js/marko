// under.marko
const $Self_withLoadAssets = withLoadAssets(() => under_default, "b", flush, "_b");
var under_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>under ${_text_resume($scope0_id, "b", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$Self_withLoadAssets({ depth: input.depth - 1 });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "b0");
	_scope($scope0_id, { h: n });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	under_default({ depth: 2 });
}, 1);
