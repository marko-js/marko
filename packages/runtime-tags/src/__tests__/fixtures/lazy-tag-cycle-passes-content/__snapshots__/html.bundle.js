// b.marko
const $A_withLoadAssets$1 = withLoadAssets(() => a_default, "a", flush, "_a");
var b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", $A_withLoadAssets$1, { depth: input.depth - 1 }, _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<button>b</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "b1");
				_scope($scope2_id, {});
			}, $scope1_id), 0, $wg__input_depth);
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_depth, $wg__input_depth);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// a.marko
const $B_withLoadAssets = withLoadAssets(() => b_default, "b", flush, "_b");
var a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$B_withLoadAssets({
				depth: input.depth - 1,
				content: _content("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<button>a</button>${_el_mark($scope2_id, "a")}`);
					_script($scope2_id, "a0");
					_scope($scope2_id, {});
				}, $scope1_id)
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_depth, $wg__input_depth);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $A_withLoadAssets = withLoadAssets(() => a_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$A_withLoadAssets({ depth: 2 });
}, 1);
