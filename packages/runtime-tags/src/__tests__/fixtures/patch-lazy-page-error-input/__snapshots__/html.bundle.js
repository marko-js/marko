// page1.marko
const $template$1 = "<button> </button>";
const $walks = " D l";
_shells({ a: "a !a0; D ;<button> </button>" });
var page1_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, { c: n });
});

// page2.marko
const $template = "<h1> </h1>";
_shells({ b: "b;D ;<h1> </h1>" });
var page2_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<h1>${_patch_text($scope0_id, "a", input.error.message, void 0, $scope0_reason, 0)}</h1>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $Page1_withLoadAssets = withLoadAssets(page1_default, flush, "_a");
const $Page2_withLoadAssets = withLoadAssets(page2_default, flush, "_b");
_shells({
	c: "c !;b%;<!><!><!>",
	c0: /*@__PURE__*/ (() => `c0;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	c1: /*@__PURE__*/ (() => `c1;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 1) {
			const $scope2_id = _scope_id();
			const $childScope = _patch_child($scope2_id, "b");
			$Page1_withLoadAssets({});
			_scope($scope2_id, { b: _existing_scope($childScope) });
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _patch_child($scope1_id, "b");
			$Page2_withLoadAssets({ error: input.error });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope2)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["c1", "c0"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.error }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "vc2", input.error);
}, 1);
