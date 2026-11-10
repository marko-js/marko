// b.marko
const $A_withLoadAssets$1 = withLoadAssets(() => a_default, "__tests__/a.marko", flush, "ready:__tests__/a.marko");
var b_default = _template("__tests__/b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", $A_withLoadAssets$1, { depth: input.depth - 1 }, _content_resume("__tests__/b.marko_2*content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<button>b</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/b.marko_2");
				_scope($scope2_id, {}, "__tests__/b.marko", "4:4");
			}, $scope1_id), 0, $wg__input_depth);
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/b.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth, $wg__input_depth);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/b.marko", 0);
});

// a.marko
const $B_withLoadAssets = withLoadAssets(() => b_default, "__tests__/b.marko", flush, "ready:__tests__/b.marko");
var a_default = _template("__tests__/a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$B_withLoadAssets({
				depth: input.depth - 1,
				content: _content("__tests__/a.marko_2*content", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<button>a</button>${_el_mark($scope2_id, "#button/0")}`);
					_script($scope2_id, "__tests__/a.marko_2");
					_scope($scope2_id, {}, "__tests__/a.marko", "4:4");
				}, $scope1_id)
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/a.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth, $wg__input_depth);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/a.marko", 0);
});

// template.marko
const $A_withLoadAssets = withLoadAssets(() => a_default, "__tests__/a.marko", flush, "ready:__tests__/a.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$A_withLoadAssets({ depth: 2 });
}, 1);
