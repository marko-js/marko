// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<p>${_text_resume($scope0_id, "a", input.a + input.b, _write_guard($scope0_reason, 0))}</p>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<div></div>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: input.a,
		g: _write_if($scope0_reason, 1) && input.b,
		i: open
	});
});

// tags/mid.marko
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason($wg__input_b << 1);
	const $childScope = _peek_scope_id();
	child_default({
		a: $global$1.x,
		b: input.b
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	mid_default({ b: n });
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: n,
		a: _existing_scope($childScope)
	});
}, 1);
