// tags/my-for.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var my_for_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_to__OR__input_content = _source_guard($scope0_reason, 0), $sg__input_to = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		const $tag = input.content;
		const $input2 = [...args];
		_patch_dynamic_tag($scope1_id, "a", $tag, $input2, 1, 0, 0, $scope0_owned, 0);
		_dynamic_tag($scope1_id, "a", $tag, [...$input2], 0, 1, $sg__input_to__OR__input_content, 1);
		$scope0_reason && _scope($scope1_id, {
			b: args,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, $sg__input_to__OR__input_content, $sg__input_to, void 0, void 0, "b0", $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { e: input.content }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.content);
}, 0, 1);

// template.marko
_shells({
	a0: "a0; ; ",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	my_for_default({
		to: 5,
		content: _content_elide("a0", (i) => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(_patch_text($scope1_id, "a", i));
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [my_for_default]);
