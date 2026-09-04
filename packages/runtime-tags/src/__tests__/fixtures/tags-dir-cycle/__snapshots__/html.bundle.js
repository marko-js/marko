// tags/cyc-b/index.marko
var cyc_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>b ${_text_resume($scope0_id, "a", input.depth, $sg__input_depth * 2)}</span>`);
	_dynamic_tag($scope0_id, "b", cyc_a_default, { depth: input.depth + 1 }, 0, 0, $sg__input_depth);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/cyc-a/index.marko
var cyc_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0), $si__input_depth = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>a ${_text_resume($scope0_id, "a", input.depth, $sg__input_depth * 2)}</div>`);
	_if(() => {
		if (input.depth < 2) {
			const $scope1_id = _scope_id();
			_set_serialize_reason($sg__input_depth);
			const $childScope = _peek_scope_id();
			cyc_b_default({ depth: input.depth + 1 });
			$si__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	$si__input_depth && _scope($scope0_id, { e: input.depth });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	cyc_a_default({ depth: n });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: n,
		c: _existing_scope($childScope)
	});
}, 1);
