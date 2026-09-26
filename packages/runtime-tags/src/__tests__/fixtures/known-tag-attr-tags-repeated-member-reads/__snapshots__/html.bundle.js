// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item_foo = _serialize_guard($scope0_reason, 1), $sg__input_item_n = _serialize_guard($scope0_reason, 2), $sg__input_item_sub_x = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.item.foo, $sg__input_item_foo)} ${_text_resume($scope0_id, "b", input.item.n, $sg__input_item_n * 2)} ${_text_resume($scope0_id, "c", input.item.sub?.x, $sg__input_item_sub_x * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child-rest/index.marko
var child_rest_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item_foo = _serialize_guard($scope0_reason, 1), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { item: { foo, ...rest } } = input;
	_html(`<span>${_text_resume($scope0_id, "a", foo, $sg__input_item_foo)} ${_text_resume($scope0_id, "b", JSON.stringify(rest), $sg__rest * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child-for/index.marko
var child_for_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", item.foo, $sg__input_item)} ${_text_resume($scope1_id, "b", item.sub?.x, $sg__input_item * 2)}</span>`);
		$si__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
	$si__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_set_serialize_reason(170);
	let $sub;
	let $sub2;
	const $childScope = _peek_scope_id();
	child_default({ item: attrTags(attrTag({
		foo: "first",
		n,
		sub: $sub
	}), {
		foo: "second",
		n: 2,
		sub: $sub2
	}) });
	_set_serialize_reason(42);
	const $childScope2 = _peek_scope_id();
	child_rest_default({ item: attrTags(attrTag({
		foo: "first",
		n
	}), {
		foo: "second",
		n: 2
	}) });
	_set_serialize_reason(2);
	let $sub3;
	let $sub4;
	const $childScope3 = _peek_scope_id();
	child_for_default({ item: attrTags(attrTag({
		foo: "first",
		sub: $sub3
	}), {
		foo: "second",
		sub: $sub4
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
