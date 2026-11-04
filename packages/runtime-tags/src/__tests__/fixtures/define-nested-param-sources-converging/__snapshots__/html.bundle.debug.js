// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let n = 0;
	const Outer = { content: _content("__tests__/template.marko_1*content", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = new Set();
		const $scope1_reason = _scope_reason(), $wi__x = _write_if($scope1_reason, 1);
		const Inner = { content: _content("__tests__/template.marko_2*content", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<p>${_text_mark($scope2_id, "#text/0", input.label + x + z)}</p>`);
			_subscribe($wi__x && $Outer_content__x__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
				z: ($wi__input_label || $wi__x) && z,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { z: "3:19" }), "__tests__/template.marko_2_input_label#0:4/subscribe"), "__tests__/template.marko_2_x#1:4/subscribe");
		}, $scope1_id) };
		const Left = { content: _content("__tests__/template.marko_4*content", ({ v }) => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			Inner.content({ z: v });
			_scope($scope4_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
		}, $scope1_id) };
		const Right = { content: _content("__tests__/template.marko_5*content", ({ w }) => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			_set_scope_reason(2);
			const $childScope2 = _peek_scope_id();
			Inner.content({ z: w });
			_scope($scope5_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "7:4");
		}, $scope1_id) };
		_set_scope_reason(2);
		const $childScope3 = _peek_scope_id();
		Left.content({ v: y });
		_set_scope_reason(2);
		const $childScope4 = _peek_scope_id();
		Right.content({ w: y });
		_scope($scope1_id, {
			x,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:x/8": $wi__x && $Outer_content__x__closures,
			"#childScope/0": _existing_scope($childScope3),
			"#childScope/1": _existing_scope($childScope4)
		}, "__tests__/template.marko", "2:2", { x: "2:17" });
	}, $scope0_id) };
	const Wrapper = { content: _content("__tests__/template.marko_3*content", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(34 | _write_guard($scope3_reason, 1) << 3);
		const $childScope5 = _peek_scope_id();
		Outer.content({
			x: a,
			y: b
		});
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope5) }, "__tests__/template.marko", "11:2");
	}, $scope0_id) };
	_set_scope_reason(34 | _write_guard($scope0_reason, 1) << 3);
	const $childScope6 = _peek_scope_id();
	Wrapper.content({
		a: input.a,
		b: n
	});
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope6)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	});
}, 1);
