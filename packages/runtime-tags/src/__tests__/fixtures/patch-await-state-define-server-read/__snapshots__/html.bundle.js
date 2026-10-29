// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!>:<!></em>";
_shells({
	a3: /*@__PURE__*/ (() => `a3 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)(),
	a4: /*@__PURE__*/ (() => `a4 >a>;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)(),
	a: "a !a5; b%;<button class=open>inc</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	const Row = { content: _content("a0", (r) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", r.v, 2, $scope1_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_label ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), $cg__input_label && "a2");
	}, $scope0_id) };
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope2_id, "a", 0, 0, $scope0_id);
		Row.content({ v: x });
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, 1, "a3", 1, 1);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		f: n,
		g: $wi__input_label && $input_label__closures
	});
}, 1);
