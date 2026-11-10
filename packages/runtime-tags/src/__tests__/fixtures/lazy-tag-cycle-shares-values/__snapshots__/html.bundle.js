// b.marko
const $A_withLoadAssets$1 = withLoadAssets(() => a_default, "a", flush, "_a");
var b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let obj = { name: "b" + input.depth };
	let from = input.from;
	_html(`<button>b</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", $A_withLoadAssets$1, {
				depth: input.depth - 1,
				from: obj
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.depth,
		g: obj,
		h: from
	});
});

// a.marko
const $B_withLoadAssets = withLoadAssets(() => b_default, "b", flush, "_b");
var a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let obj = { name: "a" + input.depth };
	let from = input.from;
	_html(`<button>a</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$B_withLoadAssets({
				depth: input.depth - 1,
				from: obj
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_depth);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: obj,
		h: from
	});
});

// template.marko
const $A_withLoadAssets = withLoadAssets(() => a_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$A_withLoadAssets({ depth: 2 });
}, 1);
