// template.marko
const $PlainChild_content__walks = "Db%l";
const $PlainChild_content__template = "<p>t=<!></p>";
_shells({
	a: "a !a6; b%;<button>+</button><!><!>",
	a5: /*@__PURE__*/ (() => `a5 a9;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($PlainChild_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($PlainChild_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const PlainChild = { content: _content("a0", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<p>t=${_text_resume($scope2_id, "a", input.a + input.b, 2, $scope2_reason, 0)}</p>`);
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "a3");
		_scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && input.a,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && input.b
		}) || (_filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 2) && _patch_fill($scope2_id, "va1", input.a, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "va2", input.b, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	let tab = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a", 0);
			PlainChild.content({
				a: tab,
				b: input.x
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a5"], $scope0_reason, 0);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.x,
		g: tab
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.x, !_server_guard($scope0_reason, 1));
}, 1);
