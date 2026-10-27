// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_a = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + item, $wg__input_items__OR__input_a)}</p>`);
		_script($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4_item#2", $wg__input_items__OR__input_a);
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", { item: "1:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_items__OR__input_a, $wg__input_items, 0, 0, 1);
	_scope($scope0_id, { input_a: input.a }, "__tests__/tags/child.marko", 0, { input_a: ["input.a"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	child_default({
		a: "m" + n,
		items: input.items
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
