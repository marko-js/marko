// a.marko
const $B_withLoadAssets = withLoadAssets(() => b_default, "b", flush, "_b");
var a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>a ${_text_resume($scope0_id, "b", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", $B_withLoadAssets, { depth: input.depth - 1 }, 0, 0, $wg__input_depth);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: n });
});

// c.marko
var c_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>c ${_text_resume($scope0_id, "b", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			a_default({ depth: input.depth - 1 });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "c0");
	_scope($scope0_id, { h: n });
});

// b.marko
var b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>b ${_text_resume($scope0_id, "b", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			c_default({ depth: input.depth - 1 });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "b0");
	_scope($scope0_id, { h: n });
});

// template.marko
var template_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	b_default({ depth: 4 });
}, 1);
