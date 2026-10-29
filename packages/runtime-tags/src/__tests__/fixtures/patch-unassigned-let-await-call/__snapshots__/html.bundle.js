// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
_shells({
	a3: /*@__PURE__*/ (() => `a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
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
	_await($scope0_id, "a", Promise.resolve(x), (r) => {
		_scope_id();
		_patch_child(0);
		Body.content({});
		_patch_child_end();
	}, 1, 0);
	_scope($scope0_id, { g: $wi__input_w && $input_w__closures }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 1));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
