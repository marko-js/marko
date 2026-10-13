// page.marko
const $template$1 = "<h1>Static</h1>";
const $walks$1 = "b";
_shells({ "__tests__/page.marko": "__tests__/page.marko,<h1>Static</h1>" });
var page_default = _template("__tests__/page.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>Static</h1>");
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Page_withLoadAssets = withLoadAssets(page_default, flush, "ready:__tests__/page.marko");
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/1");
			$Page_withLoadAssets({});
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
