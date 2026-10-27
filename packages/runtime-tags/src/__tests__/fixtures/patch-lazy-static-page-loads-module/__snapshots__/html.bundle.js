// page.marko
const $template = "<h1>Static</h1>";
const $setup = [[], []];
_shells({ a: "a,<h1>Static</h1>" });
var page_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>Static</h1>");
});

// template.marko
const $Page_withLoadAssets = withLoadAssets(() => page_default, "a", flush, "_a");
_shells({
	b: "b; ;<main></main>",
	b0: /*@__PURE__*/ (() => `b0${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "b");
			$Page_withLoadAssets({});
			$scope0_page && _scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
