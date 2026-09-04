// tags/my-for.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/my-for.marko": "__tests__/tags/my-for.marko !;b%;<!><!><!>",
	"__tests__/tags/my-for.marko_1*shell": "__tests__/tags/my-for.marko_1*shell;b%;<!><!><!>"
});
var my_for_default = _template_persisted("__tests__/tags/my-for.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_to__OR__input_content = _source_guard($scope0_reason, 0), $sg__input_to = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		const $tag = input.content;
		const $input2 = [...args];
		_patch_dynamic_tag($scope1_id, "#text/0", $tag, $input2, 1, 0, 0, $scope0_owned, 0);
		_dynamic_tag($scope1_id, "#text/0", $tag, [...$input2], 0, 1, $sg__input_to__OR__input_content, 1);
		$scope0_reason && _scope($scope1_id, {
			args,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/my-for.marko", "1:2", { args: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, $sg__input_to__OR__input_content, $sg__input_to, void 0, void 0, "__tests__/tags/my-for.marko_1*shell", $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { input_content: input.content }, "__tests__/tags/my-for.marko", 0, { input_content: ["input.content"] }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/my-for.marko0", input.content);
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	my_for_default({
		to: 5,
		content: _content_elide("__tests__/template.marko_1*content", (i) => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html(_patch_text($scope1_id, "#text/0", i));
			_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [my_for_default]);
