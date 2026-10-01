// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item_foo = _write_guard($scope0_reason, 1), $wg__input_item_n = _write_guard($scope0_reason, 2), $wg__input_item_sub_x = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.item.foo, $wg__input_item_foo)} ${_text_resume($scope0_id, "#text/1", input.item.n, $wg__input_item_n * 2)} ${_text_resume($scope0_id, "#text/2", input.item.sub?.x, $wg__input_item_sub_x * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// tags/child-rest/index.marko
var child_rest_default = _template("__tests__/tags/child-rest/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item_foo = _write_guard($scope0_reason, 1), $wg__rest = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { item: { foo, ...rest } } = input;
	_html(`<span>${_text_resume($scope0_id, "#text/0", foo, $wg__input_item_foo)} ${_text_resume($scope0_id, "#text/1", JSON.stringify(rest), $wg__rest * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child-rest/index.marko", 0);
});

// tags/child-for/index.marko
var child_for_default = _template("__tests__/tags/child-for/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "#text/0", item.foo, $wg__input_item)} ${_text_resume($scope1_id, "#text/1", item.sub?.x, $wg__input_item * 2)}</span>`);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/child-for/index.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_item, $wg__input_item, $wg__input_item, 0, 1);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/child-for/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_set_scope_reason(162);
	let $sub;
	if (n > 1) {
		$sub = attrTag({ x: n });
	}
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
	if (n > 1) {
		$sub2 = attrTag({ x: n });
	}
	let $sub3;
	if (n > 1) {
		$sub3 = attrTag({ x: n });
	}
	const $childScope3 = _peek_scope_id();
	child_for_default({ item: attrTags(attrTag({
		foo: "first",
		sub: $sub2
	}), {
		foo: "second",
		sub: $sub3
	}) });
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/2": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
