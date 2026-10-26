// lazy.marko
const $template$1 = "<b>lazy</b>";
const $setup$2 = [[], []];
_shells({ b: "b,<b>lazy</b>" });
var lazy_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<b>lazy</b>");
});

// layout.marko
const $template = "<html><body><!><!></body></html>";
const $walks = "E%b%m";
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "b", flush, "_b");
const $setup$1 = [[], []];
_shells({
	a: "a;E%b%;<html><body><!><!></body></html>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_open = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "b");
			$Lazy_withLoadAssets({});
			$scope0_page && _scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
	_trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {});
}, 1);

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "a");
	layout_default({
		open,
		content: _content("c1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<button>toggle</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "c0");
			$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, {
		b: open,
		a: _existing_scope($childScope)
	});
}, 1);
