// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item_foo = _write_guard($scope0_reason, 1), $wg__input_item_n = _write_guard($scope0_reason, 2), $wg__input_item_sub_x = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.item.foo, $wg__input_item_foo)} ${_text_resume($scope0_id, "b", input.item.n, $wg__input_item_n * 2)} ${_text_resume($scope0_id, "c", input.item.sub?.x, $wg__input_item_sub_x * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child-rest/index.marko
var child_rest_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item_foo = _write_guard($scope0_reason, 1), $wg__rest = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { item: { foo, ...rest } } = input;
	_html(`<span>${_text_resume($scope0_id, "a", foo, $wg__input_item_foo)} ${_text_resume($scope0_id, "b", JSON.stringify(rest), $wg__rest * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child-for/index.marko
var child_for_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", item.foo, $wg__input_item)} ${_text_resume($scope1_id, "b", item.sub?.x, $wg__input_item * 2)}</span>`);
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item, 0, 0, 1);
	$wi__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_set_scope_reason(162);
	let $sub;
	const $childScope = _peek_scope_id();
	child_default({ item: attrTag({
		foo: "first",
		n,
		sub: $sub
	}) });
	_set_scope_reason(42);
	const $childScope2 = _peek_scope_id();
	child_rest_default({ item: attrTags(attrTag({
		foo: "first",
		n
	}), {
		foo: "second",
		n: 2
	}) });
	_set_scope_reason(2);
	let $sub2;
	let $sub3;
	const $childScope3 = _peek_scope_id();
	child_for_default({ item: attrTags(attrTag({
		foo: "first",
		sub: $sub2
	}), {
		foo: "second",
		sub: $sub3
	}) });
	_html(`<button>inc</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	});
}, 1);
