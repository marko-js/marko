// tags/card/index.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1;D ;<em> </em>",
	b2: "b2;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "b0", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b4", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("b3", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) }, 1);
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&b`)("b%c"), ((_w0) => `<button id=inc> </button>${_w0}<!>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	card_default({ promise: input.promise });
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		g: count,
		c: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
