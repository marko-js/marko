// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template);
_shells({
	a4: /*@__PURE__*/ (() => `a4;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)(),
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	const Outer = { content: _content("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		Body.content({});
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_await($scope0_id, "a", Promise.resolve(x), (r) => {
		_scope_id();
		_patch_child(1);
		Outer.content({});
		_patch_child_end();
	}, 1, 0);
	_scope($scope0_id, { g: $wi__input_w && $input_w__closures }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.w, !_server_guard($scope0_reason, 1));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
