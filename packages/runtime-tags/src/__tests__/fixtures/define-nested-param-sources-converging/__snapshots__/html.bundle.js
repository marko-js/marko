// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a5", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__x = _write_if($scope1_reason, 1);
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<p>${_text_mark($scope2_id, "a", input.label + x + z)}</p>`);
			_subscribe($wi__x && $Outer_content__x__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: ($wi__input_label || $wi__x) && z,
				_: _scope_with_id($scope1_id)
			}), "a1"), "a2");
		}, $scope1_id) };
		const Left = { content: _content("a3", ({ v }) => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			Inner.content({ z: v });
			_scope($scope4_id, { a: _existing_scope($childScope) });
		}, $scope1_id) };
		const Right = { content: _content("a4", ({ w }) => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_set_scope_reason(2);
			const $childScope2 = _peek_scope_id();
			Inner.content({ z: w });
			_scope($scope5_id, { a: _existing_scope($childScope2) });
		}, $scope1_id) };
		_set_scope_reason(2);
		const $childScope3 = _peek_scope_id();
		Left.content({ v: y });
		_set_scope_reason(2);
		const $childScope4 = _peek_scope_id();
		Right.content({ w: y });
		_scope($scope1_id, {
			e: x,
			_: _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope3),
			b: _existing_scope($childScope4)
		});
	}, $scope0_id) };
	const Wrapper = { content: _content("a6", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(34 | _write_guard($scope3_reason, 1) << 3);
		const $childScope5 = _peek_scope_id();
		Outer.content({
			x: a,
			y: b
		});
		_scope($scope3_id, { a: _existing_scope($childScope5) });
	}, $scope0_id) };
	_set_scope_reason(34 | _write_guard($scope0_reason, 1) << 3);
	const $childScope6 = _peek_scope_id();
	Wrapper.content({
		a: input.a,
		b: n
	});
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope6)
	});
}, 1);
