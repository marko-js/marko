// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<div><!></div>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/init");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// layout.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<html><body><main>${_w0}<!></main></body></html>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `F/${_w0}&%n`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/layout.marko_1*content": "__tests__/layout.marko_1*content,<b>shown</b>",
	"__tests__/layout.marko": /*@__PURE__*/ (() => `__tests__/layout.marko${_shell_marker($setup$1)};${((_w0) => `F/${_w0}&%n`)("b%c")};${((_w0) => `<html><body><main>${_w0}<!></main></body></html>`)($template$2)}`)()
});
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	wrap_default({
		show: input.open,
		content: _content_resume("__tests__/layout.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html("<b>shown</b>");
		}, $scope0_id)
	});
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</main>"), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/layout.marko", 0);
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
	_set_scope_reason(2);
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
