// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
_shells({
	a3: /*@__PURE__*/ (() => `a3 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	a4: /*@__PURE__*/ (() => `a4 >a>;${((_w0) => `b/${_w0}&b`)($Body_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_w = _client_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_w ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }), $cg__input_w && "a2");
	}, $scope0_id) };
	_await($scope0_id, "a", Promise.resolve(input.v), (r) => {
		const $scope2_id = _scope_id();
		const $childScope = _peek_scope_id($scope2_id, "a", 0, 0, $scope0_id);
		Body.content({});
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, 1, "a3", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, { f: $wi__input_w && $input_w__closures });
}, 1);
