// tags/sum-with.marko
var sum_with_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 0), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const Sum = { content: _content("b0", ({ a }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__a = _write_if($scope1_reason, 0);
		const $return = a + input.n;
		($wi__input_n || $wi__a) && _subscribe($wi__input_n && $input_n__closures, _scope($scope1_id, {
			c: $wi__input_n && a,
			_: _scope_with_id($scope0_id)
		}), "b1", 0);
		($wi__input_n || $wi__a) && _resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let x = Sum.content({ a: 1 });
	$wi__input_n && _var($scope0_id, "b", $childScope, "b2");
	_html(`<div>${_text_resume($scope0_id, "c", x, $wg__input_n)}</div>`);
	$wi__input_n && _scope($scope0_id, {
		f: input.n,
		h: $wi__input_n && $input_n__closures,
		a: $wi__input_n && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	sum_with_default({ n });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: n,
		a: _existing_scope($childScope)
	});
}, 1);
