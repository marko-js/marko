// under.marko
const $Self_withLoadAssets = withLoadAssets(() => under_default, "__tests__/under.marko", flush, "ready:__tests__/under.marko");
var under_default = _template("__tests__/under.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>under ${_text_resume($scope0_id, "#text/1", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$Self_withLoadAssets({ depth: input.depth - 1 });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/under.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "__tests__/under.marko_0");
	_scope($scope0_id, { n }, "__tests__/under.marko", 0, { n: "2:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	under_default({ depth: 2 });
}, 1);
