// template.marko
const $PlainChild_content__walks = "Db%l";
const $PlainChild_content__template = "<p>t=<!></p>";
_shells({
	a0: "a0 !;Db%;<p>t=<!></p>",
	a: "a !a5; b%;<button>+</button><!><!>",
	a1: /*@__PURE__*/ (() => `a1 a10;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($PlainChild_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($PlainChild_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const PlainChild = { content: _content_elide("a0", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_html(`<p>t=${_patch_text($scope2_id, "a", input.a + input.b, 2, $scope2_reason, 0)}</p>`);
		_patch_write($scope2_id, "wd", input.a, 1);
		_patch_write($scope2_id, "we", input.b, 1);
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "a4");
		$scope2_page ? _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && input.a,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && input.b
		}) : (_filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 2) && _patch_value($scope2_id, "va2", input.a), _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_value($scope2_id, "va3", input.b));
	}, $scope0_id) };
	let tab = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a");
			PlainChild.content({
				a: tab,
				b: input.x
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a5");
	_patch_value($scope0_id, "va7", tab, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.x,
		g: tab
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va6", input.x);
}, 1);
