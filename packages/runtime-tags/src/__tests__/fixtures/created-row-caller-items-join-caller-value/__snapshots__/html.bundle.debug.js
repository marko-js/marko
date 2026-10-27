// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $wg__input_b__OR__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "#text/0", input.b, $wg__input_b)}</i>`);
			_scope($scope1_id, {}, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_text_resume($scope2_id, "#text/0", d, $wg__input_b__OR__input_items)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			item: _write_if($scope0_reason, 1) && item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "5:2", { item: "5:6" });
	}, 0, $scope0_id, "#text/1", $wg__input_b__OR__input_items, _write_guard($scope0_reason, 2), 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {
		input_b: input.b,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}<button class=bb>b</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		b
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		b: "2:6"
	});
}, 1);
