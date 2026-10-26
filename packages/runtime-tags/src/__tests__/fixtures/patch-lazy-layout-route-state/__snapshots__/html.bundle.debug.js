// lazy.marko
const $template$2 = "<b>lazy</b>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/lazy.marko": "__tests__/lazy.marko,<b>lazy</b>" });
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<b>lazy</b>");
});

// layout.marko
const $template$1 = "<html><body><!><!></body></html>";
const $walks$1 = "E%b%m";
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko");
const $setup$1 = [[], []];
_shells({
	"__tests__/layout.marko": "__tests__/layout.marko;E%b%;<html><body><!><!></body></html>",
	"__tests__/layout.marko_1*shell": /*@__PURE__*/ (() => `__tests__/layout.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)()
});
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_open = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/1");
			$Lazy_withLoadAssets({});
			$scope0_page && _scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/layout.marko", "4:6");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, void 0, void 0, void 0, ["__tests__/layout.marko_1*shell"], $scope0_reason, 1);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
	_trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/layout.marko", 0);
}, 1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	layout_default({
		open,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<button>toggle</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, {
		open,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "2:6" });
}, 1);
