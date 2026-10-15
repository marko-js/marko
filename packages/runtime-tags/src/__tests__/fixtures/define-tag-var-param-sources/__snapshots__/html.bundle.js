// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	const Sum = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = a + b;
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			c: _write_if($scope1_reason, 2) && a,
			d: _write_if($scope1_reason, 1) && b
		});
		return $return;
	}, $scope0_id) };
	_set_scope_reason(10 | $wg__input_b << 5);
	const $childScope = _peek_scope_id();
	let x = Sum.content({
		a: n,
		b: input.b
	});
	_var($scope0_id, "b", $childScope, "a1");
	_set_scope_reason($wg__input_b << 1 | $wg__input_b << 3);
	const $childScope2 = _peek_scope_id();
	let y = Sum.content({
		a: input.b,
		b: 1
	});
	_var($scope0_id, "d", $childScope2, "a2");
	_html(`<div>${_text_resume($scope0_id, "e", x)}|${_text_resume($scope0_id, "f", y, $wg__input_b * 2)}</div><button>+</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		k: n,
		a: _existing_scope($childScope),
		c: _write_if($scope0_reason, 0) && _existing_scope($childScope2)
	});
}, 1);
