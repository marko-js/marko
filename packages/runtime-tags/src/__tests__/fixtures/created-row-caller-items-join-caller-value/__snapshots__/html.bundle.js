// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $wg__input_b__OR__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "a", input.b, $wg__input_b)}</i>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_text_resume($scope2_id, "a", d, $wg__input_b__OR__input_items)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			c: _write_if($scope0_reason, 1) && item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", $wg__input_b__OR__input_items, _write_guard($scope0_reason, 2), 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.b,
		h: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let b = "m";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(42);
			const $childScope = _peek_scope_id();
			child_default({
				b,
				items: list
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}<button class=bb>b</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: list,
		h: b
	});
}, 1);
