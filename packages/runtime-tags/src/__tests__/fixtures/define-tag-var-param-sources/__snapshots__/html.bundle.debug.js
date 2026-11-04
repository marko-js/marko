// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	const Sum = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = a + b;
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			a: _write_if($scope1_reason, 2) && a,
			b: _write_if($scope1_reason, 1) && b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		});
		return $return;
	}, $scope0_id) };
	_set_scope_reason(10 | $wg__input_b << 5);
	const $childScope = _peek_scope_id();
	let x = Sum.content({
		a: n,
		b: input.b
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_x#11/var");
	_set_scope_reason($wg__input_b << 1 | $wg__input_b << 3);
	const $childScope2 = _peek_scope_id();
	let y = Sum.content({
		a: input.b,
		b: 1
	});
	$wi__input_b && _var($scope0_id, "#scopeOffset/3", $childScope2, "__tests__/template.marko_0_y#12/var");
	_html(`<div>${_text_resume($scope0_id, "#text/4", x)}|${_text_resume($scope0_id, "#text/5", y, $wg__input_b * 2)}</div><button>+</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": $wi__input_b && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
