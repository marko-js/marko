// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({
	a: "a !a6;b%b ;<!><!><button>+</button>",
	a5: /*@__PURE__*/ (() => `a5 a9;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("a1", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<p>${_text_resume($scope2_id, "a", fn() + label, 1, $scope2_reason, 0)}</p>`);
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "a3");
		_scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && fn,
			e: _unfilled_if($scope2_reason, 1) && label
		}) || _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "va2", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Row.content({
				fn: _resume(() => count, "a0", $scope1_id),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a5"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: count
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 1));
}, 1);
